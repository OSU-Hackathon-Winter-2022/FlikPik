import React from 'react';
import { Text, View, Image } from 'react-native';

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
            <Image source={{uri: url}} style={{resizeMode: 'contain', width: 315, height: 400}} />
            <Text>Title: {props.title}</Text>
            <Text>Release Year: {props.year}</Text>
            <Text>Rating: {props.rating}</Text>
            <Text>Runtime: {props.runtime}</Text>
            <Text>Genre(s): {props.genres}</Text>
            <Text>Plot: {props.plot}</Text>
            <Text>Starring: {props.stars}</Text>
            <Text>IMDB Score: {props.score}</Text>
        </View>
    );
}