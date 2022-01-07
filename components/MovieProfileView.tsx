import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

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
        <View style={props.style}>
            <Image source={{uri: url}} style={{position: 'absolute', top: -40, left: 65, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', resizeMode: 'contain', width: 235, height: 320}} />

            <Text style={{ top: 150, left: 0, right: 0, fontSize: 12, textAlign: 'left', color: 'black' }}>
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
    );
}