import recommendation_config from "./recommendation_config_top_250.json"
import db_json from "../database/json_data_db_sub.json"
import { database, databaseRef } from "../firebase/firebase-config";
import { ref, onValue, update, set, get, child, push } from "firebase/database";
import { getAuth } from 'firebase/auth';
import GenreSelector from '../components/GenreSelector'

const auth = getAuth();
const user = auth.currentUser;

let topMovieProfilesList = [];
let topMovieProfilesObject = {};
for (let movie of db_json["movies"]) {
    let movieProfile = {
        id: movie.id,
        title: movie.title,
        year: movie.year,
        runtime: movie.runtime,
        coverImageURL: movie.coverImageURL,
        stars: movie.stars,
        genres: movie.genres,
        rating: movie.rating,
        score: movie.score,
        plot: movie.plot
    }
    topMovieProfilesList.push(movieProfile);
    topMovieProfilesObject[movie.id] = movieProfile;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function getRandomMovieList(number) {
    
    let selected = new Set();
    let movies = [];
    let i = 0;

    const dbRef = ref(getDatabase());
    if (user) {
        const uid = user.uid;
        get(child(dbRef, `user_' + uid + '/unswiped_movies`)).then((snapshot) => {
            if (snapshot.exists()) {
                let unswipedMoviesList = snapshot.val();
                while(i < number) {
                    let randIndex = getRandomInt(0, unswipedMoviesList.length);       // won't need this because of the parameter
                    if (!selected.has(randIndex)) {
                        movies.push(unswipedMoviesList[randIndex]);       // randindex needs to be parameter
                        selected.add(randIndex);        // randindex needs to be parameter
                        i++;
                    }
                }
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
        console.error(error);
        });

        // let genre = '{route.params.paramKey}';
        // ##### pass in parameter/variable from GenreSelector
        // ##### use parameter to generate Movie List
    } else {
        console.log("No user is currently logged in.")
    }

    return movies
}

let id_to_imdb = recommendation_config["id-to-imdb"]
let imdb_to_id = recommendation_config["imdb-to-id"]
let similarity_matrix = recommendation_config["similarity-matrix"]

const matched_ids = new Set();
const unmatched_ids = new Set();

export const matched_movies = new Set();
export const unmatched_movies = new Set();

export function addMatched(movie) {
    get(child(databaseRef, 'user_' + uid)).then((snapshot) => {
        let user_db = snapshot.val();
        if (snapshot.exists() && user) {
            // Initialize new user's db under their userid
            const uid = user.uid;
            if (!("matched_movies" in user_db)) {
                const newPostKey = push(child(ref(database), 'user_' + uid)).key;
                let newChild = { "matched_movies" : [movie["title"]]}
                let updates = {};
                updates['user_' + uid + '/' + newPostKey] = newChild;
                update(ref(database), updates)
            } else {
                const postListRef = ref(database, 'user_' + uid + '/matched_movies');
                const newPostRef = push(postListRef);
                set(newPostRef, movie["title"]);
            }
        } else {
            console.log("No user is currently logged in.");
        }
    }).catch((error) => {
    console.error(error);
    });

    matched_movies.add(movie)
}

export function addUnmatched(movie) {
    if (user) {
        const uid = user.uid;
        get(child(databaseRef, 'user_' + uid)).then((snapshot) => {
            let user_db = snapshot.val();
            if (snapshot.exists()) {
                // Initialize new user's db under their userid
                if (!("unmatched_movies" in user_db)) {
                    const newPostKey = push(child(ref(database), 'user_' + uid)).key;
                    let newChild = { "unmatched_movies" : [movie["title"]]}
                    let updates = {};
                    updates['user_' + uid + '/' + newPostKey] = newChild;
                    update(ref(database), updates)
                } else {
                    const postListRef = ref(database, 'user_' + uid + '/unmatched_movies');
                    const newPostRef = push(postListRef);
                    set(newPostRef, movie["title"]);
                }
            }else {
                console.log("There was an error connecting to the database.");
            }
        }).catch((error) => {
        console.error(error);
        });
        ;
    } else {
            console.log("No user is currently logged in.");
        }
    
    unmatched_movies.add(movie)
}

export function recommendations(disliked_movies, liked_movies) {
    if (liked_movies.length == 0) {
        return getRandomMovieList(10);
    }
    let dont_add = new Set()
    for (const movie of liked_movies) {
        dont_add.add(movie.id)
        matched_ids.add(movie.id)
    }
    for (const movie of disliked_movies) {
        dont_add.add(movie.id)
        unmatched_ids.add(movie.id)
    }
    let new_recommendations = [];
    for (const movie of liked_movies) {
        let sim_scores = Array.from(similarity_matrix[imdb_to_id[movie.id]].entries())
        sim_scores.sort((a, b) => {b[1] - a[1]})
        for (const [index, score] of sim_scores.slice(1, 11)) {
            let imdb_id = id_to_imdb[index+1]
            if (!dont_add.has(imdb_id) && !unmatched_ids.has(imdb_id) && !matched_ids.has(imdb_id)) {
                new_recommendations.push(topMovieProfilesObject[imdb_id])
            }
        }
    }
    return new_recommendations
}
