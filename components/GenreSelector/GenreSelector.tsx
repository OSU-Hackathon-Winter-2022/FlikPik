import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

const GenreSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    const genreList = ["Action", "Comedy", "Drama", "Horror"]  // REPLACE WITH LIST FROM IMDB API

    return (
        <Picker
            style={styles.root}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>  // NEED TO GET THIS ITEM VALUE AND SAVE IT FOR DATABASE
                setSelectedLanguage(itemValue)
        }>
        <Picker.Item label={genreList[0]} value={genreList[0]} />
        <Picker.Item label={genreList[1]} value={genreList[1]} />
        <Picker.Item label={genreList[2]} value={genreList[2]} />
        <Picker.Item label={genreList[3]} value={genreList[3]} />
        </Picker>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignContent: "center"
    }

});




export default GenreSelector;
