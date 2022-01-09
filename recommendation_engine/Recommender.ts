import recommendation_config from "./recommendation_config_top_250.json"
import top_movies from '../database/top_250_by_rating.json'
import GenreSelector from '../components/GenreSelector'
import {genreString} from "../components/GenreSelector/GenreSelector"


let topMovieProfilesList = [];
let topMovieProfilesObject = {};
for (let movie of top_movies.results) {
    let movieProfile = {
        id: movie.id,
        title: movie.title,
        year: movie.description.slice(-5, -1),
        runtime: movie.runtimeStr,
        coverImageURL: movie.image,
        stars: movie.stars.split(', ').slice(1).join(', '),
        genres: movie.genres,
        rating: movie.contentRating,
        score: movie.imDbRating,
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
    let recmovies = [];
    let i = 0;

    // ##### pass in parameter/variable from GenreSelector
    // ##### use parameter to generate Movie List
    let num_tries = 0
    while(i < number && num_tries < 250) {
        let randIndex = getRandomInt(0, topMovieProfilesList.length);       // won't need this because of the parameter
        let randMovie = topMovieProfilesList[randIndex]
        if (!selected.has(randIndex)) {
            let selectedGenreInMovie = randMovie.genres.toLowerCase().includes(genreString.toLowerCase());
            if (genreString != "" && (genreString == "Pick for me!" || selectedGenreInMovie)) {
                movies.push(randMovie);       // randindex needs to be parameter
                selected.add(randIndex);        // randindex needs to be parameter
                i++;
            } else {
                num_tries++;
            }
        }
    }
    while (i < number) {
        let randIndex = getRandomInt(0, topMovieProfilesList.length);       // won't need this because of the parameter
        let randMovie = topMovieProfilesList[randIndex]
        if (!selected.has(randIndex)) {
            movies.push(randMovie);       // randindex needs to be parameter
            selected.add(randIndex);        // randindex needs to be parameter
            i++;
        }
    }
    return movies;
}

let id_to_imdb = recommendation_config["id-to-imdb"]
let imdb_to_id = recommendation_config["imdb-to-id"]
let similarity_matrix = recommendation_config["similarity-matrix"]

const matched_ids = new Set();
const unmatched_ids = new Set();


export const matched_movies = new Set();
export const unmatched_movies = new Set();

export function addMatched(movie) {
    matched_movies.add(movie)
}

export function addUnmatched(movie) {
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
    let recommendation_info = {"matched": liked_movies}
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