import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../../navigation';
import Tabs from '../../navigation/tabs';
import { MovieSwiper } from '../../components/MovieSwiper';
import top_movies from '../../database/top_250_by_rating.json'

let topMovieProfiles = [];
for (let movie of top_movies.results) {
    let movieProfile = {
        id: movie.id,
        title: movie.title,
        year: movie.description.slice(1, 5),
        runtime: movie.runtimeStr,
        coverImageURL: movie.image,
        stars: movie.stars,
        genres: movie.genres,
        rating: movie.contentRating,
        score: movie.imDbRating,
        plot: movie.plot
    }
    topMovieProfiles.push(movieProfile);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let selected = new Set();
let default_movies = [];
let i = 0;
while(i < 10) {
    let randIndex = getRandomInt(0, topMovieProfiles.length);
    if (!selected.has(randIndex)) {
        default_movies.push(topMovieProfiles[randIndex]);
        selected.add(randIndex);
        i++;
    }
}

const Swipe = () => {
    return (
        // <NavigationContainer independent={true}>
        <MovieSwiper movies={default_movies} />
        // {/* </NavigationContainer> */}
    );
};

export default Swipe



// const App = () => {

//   return (
//     <NavigationContainer>
//       <Tabs />
//     </NavigationContainer>
//   );
// }