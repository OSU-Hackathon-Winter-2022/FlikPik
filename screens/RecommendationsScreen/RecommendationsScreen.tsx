import React from 'react'
import { View, Text } from 'react-native'
import { matched_movies } from '../../recommendation_engine/Recommender'

const Recommendations = () => {
    let movies = Array.from(matched_movies)
    let titles = movies.map((movie) => {return movie.title})
    return (
        <View>
            <Text style={{ fontSize: 24, alignSelf: 'center'}}>{titles.join('\n')}</Text>
        </View>
    )
}

export default Recommendations