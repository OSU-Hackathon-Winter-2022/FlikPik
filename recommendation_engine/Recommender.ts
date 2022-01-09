import recommendation_config from "./recommendation_config_top_250.json"
import top_movies from '../database/top_250_by_rating.json'

let topMovieProfilesList = [];
let topMovieProfilesObject = {};
for (let movie of top_movies.results) {
    let movieProfile = {
        id: movie.id,
        title: movie.title,
        year: movie.description.slice(-5, -1),
        runtime: movie.runtimeStr,
        coverImageURL: movie.image,
        stars: movie.stars,
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
    let i = 0;
    while(i < number) {
        let randIndex = getRandomInt(0, topMovieProfilesList.length);
        if (!selected.has(randIndex)) {
            movies.push(topMovieProfilesList[randIndex]);
            selected.add(randIndex);
            i++;
        }
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

export function addMatched(title) {
    matched_movies.add(title)
}

export function addUnmatched(title) {
    unmatched_movies.add(title)
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