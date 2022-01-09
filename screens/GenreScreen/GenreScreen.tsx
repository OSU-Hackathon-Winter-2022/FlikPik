import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import App from '../../components/GenreSelector';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SwipeScreen from '../SwipeScreen';
import GenreSelector from '../../components/GenreSelector';




const Genre = () => {

    const navigation = useNavigation();

    const onSwipePressed = () => {
        // console.warn("Swipe session");
        navigation.navigate('Swipe');
    };

    return (
        <View style={styles.root}>
            {/* <Text style={{ fontSize: 24, top: 60, alignSelf: 'center',  paddingBottom: 40}}>
                Select a Genre
            </Text>
            <Text>
                {'\n'}
                {'\n'}
                {'\n'}

            </Text> */}
            <GenreSelector></GenreSelector>
            {/* <TouchableOpacity  // NEED TO SEND OUR PICKER VALUE TO SWIPE SCREEN TO ALTER WHAT IS SHOWN
                style={styles.button}
                onPress={onSwipePressed}
            >
                <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 25}}>START SWIPING</Text>
            </TouchableOpacity> */}

        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    button: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "#880808",
        padding: 25,
        paddingTop: 19,
        paddingLeft: 80,
        paddingRight: 80,
        borderRadius: 25,
        marginTop: 375,
        marginBottom: 60,
    }
});

export default Genre;





