import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../../navigation';
import Tabs from '../../navigation/tabs';
import { MovieSwiper } from '../../components/MovieSwiper';
import top_movies from '../../database/top_250_by_rating.json'
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();

    const onTestPress = () => {
        console.warn('onSignUpPressed');
        navigation.navigate('Home');
    };

    return (

        <View>
            <MovieSwiper movies={default_movies} />
            <Tabs />
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



// const App = () => {

//   return (
//     <NavigationContainer>
//       <Tabs />
//     </NavigationContainer>
//   );
// }