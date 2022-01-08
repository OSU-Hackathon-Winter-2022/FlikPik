import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import GenreSelector from '../../components/GenreSelector';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Genre = () => {

    const navigation = useNavigation();

    const onSwipePressed = () => {
        console.warn("Swipe session");
        navigation.navigate('Swipe');
    };

    return (
        <View style={styles.root}>
            <Text style={{ fontSize: 24, alignSelf: 'center',  paddingBottom: 40}}>Select a Genre</Text>
            <GenreSelector></GenreSelector>
            <TouchableOpacity  // NEED TO SEND OUR PICKER VALUE TO SWIPE SCREEN TO ALTER WHAT IS SHOWN
                style={styles.button}
                onPress={onSwipePressed}
            >
                <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 25}}>START SWIPING</Text>
                
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#880808",
        padding: 60,
        paddingLeft: 80,
        paddingRight: 80
    }
});

export default Genre;