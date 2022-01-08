import React from 'react';
import { Platform, Dimensions, Text, StyleSheet, View, Image, ScrollView } from 'react-native';

type MovieProps = {
    title: string;
    year: string;
    coverImageURL: string;
    runtime: string;
    // directors: string;
    // writers: string;
    stars: string;
    genres: string;
    rating: string;
    score: string;
    id: string;
    plot: string;
    style: Object;
};

export type MovieProperties = MovieProps;

export function MovieProfileView(props : MovieProps) {
    let url = props.coverImageURL
    return (
        <View style={{flex: 1, backgroundColor: '#3B71F3', borderRadius: 50, justifyContent: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={{uri: url}}
                style={{
                    resizeMode: 'contain',
                    height: Dimensions.get('screen').height/2.5,
                    width: Dimensions.get('screen').width}} />
            </View>
            <View>
                <Text style={{margin: 18, fontSize: 18, textAlign: 'left', color: 'black', alignItems: 'center'}}>
                    Title: {props.title} {'\n'}
                    Release Year: {props.year} {'\n'}
                    Rating: {props.rating} {'\n'}
                    Runtime: {props.runtime} {'\n'}
                    Genre(s): {props.genres} {'\n'}
                    {'\n'}
                    Plot: {props.plot} {'\n'}
                    {'\n'}
                    Starring: {props.stars} {'\n'}
                    IMDB Score: {props.score} {'\n'}
                    </Text>
            </View>
        </View>
    );
}