import React from 'react'
import { Dimensions, TouchableOpacity, ScrollView, Button, Text, StyleSheet, SafeAreaView } from 'react-native'
import { matched_movies } from '../../recommendation_engine/Recommender'
import GenreSelector from '../../components/GenreSelector'
import { test_movies, getRandomMovieList } from '../../text'

let colors = ["lightblue", "purple", "red", "blue", "green", "pink", "orange"]

// {route}
const Recommendations = () => {
    let movies = Array.from(matched_movies)
    let titles = movies.map((movie) => {return movie.title})

    let list = ['empy']
    return (

        <ScrollView>
            {titles.map((title, idx) => {
                return (
                    <TouchableOpacity style={{height: 40, width: Dimensions.get('screen').width, backgroundColor: colors[idx%colors.length]}}
                        onPress={() => {console.log("hello")}}>
                        <Text style={{fontSize: 20, alignSelf: 'center'}}>{title}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>

    //     <SafeAreaView style={{flex: 1}}>
    //     <View style={styles.container}>
    //       {/* <Text style={styles.textStyle}>
    //         Values passed from First page: {route.params.paramKey}
    //       </Text> */}
    //     </View>

    //   </SafeAreaView>

    )
}

export default Recommendations



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      marginVertical: 10,
    },
  });
  