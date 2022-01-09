import React from 'react'
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';

import { MovieSwiper } from '../../components/MovieSwiper';
import top_movies from '../../database/top_250_by_rating.json'
import { useNavigation } from '@react-navigation/native';
import { getRandomMovieList } from '../../recommendation_engine/Recommender'


const Swipe = () => {
    const navigation = useNavigation();
    let fullMoviesQueue = getRandomMovieList(24);
    let movies = fullMoviesQueue.slice(0, 12);
    let moviesQueue = fullMoviesQueue.slice(12);
    return (
        <View>
            <MovieSwiper movies={movies} moviesQueue={moviesQueue} />
        </View>
    );
};




const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,

    },
    popImage: {
        width: '150%',
        height: '30%',
        flex: 1,
        resizeMode: 'contain',
    }
});



export default Swipe


