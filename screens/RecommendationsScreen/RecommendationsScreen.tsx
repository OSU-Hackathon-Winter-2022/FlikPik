import React from 'react'
import { View, Text } from 'react-native'
import { matched_movies } from '../../recommendation_engine/Recommender'

const Recommendations = () => {
    return (
        <View>
            <Text style={{ fontSize: 24, alignSelf: 'center'}}>{Array.from(matched_movies).join('\n')}</Text>
        </View>
    )
}

export default Recommendations