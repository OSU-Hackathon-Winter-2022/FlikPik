import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { matched_movies } from '../../recommendation_engine/Recommender'
import GenreSelector from '../../components/GenreSelector'

// {route}
const Recommendations = () => {
    let movies = Array.from(matched_movies)
    let titles = movies.map((movie) => {return movie.title})



    return (

        <View>
            <Text style={{ fontSize: 24, alignSelf: 'center'}}>{titles.join('\n')}</Text>
        </View>

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
  