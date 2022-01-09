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

    const onSelectPressed = () => {
        // console.warn("Swipe session");
        navigation.navigate('Swipe');
    };

    return (
        <View style={styles.root}>
            <Text style={{ fontSize: 24, top: 20, alignSelf: 'center',  paddingBottom: 40}}>
                Select a Genre
            </Text>

            <GenreSelector></GenreSelector>
            {/* <View style={{height: 100}}>
            <Text>{`Your selection is ${genreList[selected]}`}</Text>
            <Text></Text>
            <TouchableOpacity  // NEED TO SEND OUR PICKER VALUE TO SWIPE SCREEN TO ALTER WHAT IS SHOWN
                    style={styles.button}
                    onPress={onSelectPressed}
                >
                    <Text style={{color: "white", alignItems: 'center',fontWeight: "bold", fontSize: 25}}>Start Swiping</Text>
                </TouchableOpacity>
            </View> */}

        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',

    },
    button: {
        // flex: 1,
        backgroundColor: "#880808",
        padding: 20,
        paddingLeft: 120,
        paddingRight: 80,
        borderRadius: 40,
        // marginTop: 180,
      },
});

export default Genre;





