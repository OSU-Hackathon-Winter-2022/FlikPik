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
        <View style={{
            flex: 2,
            flexDirection: 'column',
            backgroundColor: '#3B71F3',
            borderRadius: 50}}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={{uri: url}}
                style={{
                    margin: 10, 
                    marginBottom: 0,
                    resizeMode: 'contain',
                    flex: 1,
                    width: Dimensions.get('screen').width}} />
            </View>
            <View style={{flex: 1, margin: 10, marginTop: 0}}>
                <Text style={{fontSize: 24, textAlign: 'left', color: 'black'}} adjustsFontSizeToFit={true}>
                    Title: {props.title} {'\n'}
                    Release Year: {props.year} {'\n'}
                    Rating: {props.rating} {'\n'}
                    Runtime: {props.runtime} {'\n'}
                    Genre(s): {props.genres} {'\n'}
                    {'\n'}
                    Plot: {props.plot} {'\n'}
                    {'\n'}
                    Starring: {props.stars.split(', ').slice(1).join(', ')} {'\n'}
                    IMDB Score: {props.score} {'\n'}
                    </Text>
            </View>
        </View>
    );
}