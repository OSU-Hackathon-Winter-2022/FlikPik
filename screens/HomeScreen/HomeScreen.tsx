import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';


const Home = () => {

    const navigation = useNavigation();

    const onSwipePressed = () => {
        // console.warn("Swipe session");
        navigation.navigate('Swipe');
    };

    const onRecommendedPressed = () => {
        // console.warn("Swipe session");
        navigation.navigate('Recommendations');
    };

    const onGenrePressed = () => {
        // console.warn("Swipe session");
        navigation.navigate('Genre');
    };


    return (
        <View style={styles.root}>
            <View>
                <Text style={{fontSize: 40, fontWeight:'bold'}}>
                    Movie Dashboard
                </Text>
            </View>
            <Text style={{fontSize: 25, fontWeight:'bold', textAlign:'center'}}></Text>
            <TouchableOpacity
                style={styles.genrebutton}
                onPress={onGenrePressed}
            >
                <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 25}}>Pick a Genre</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.recommendationbutton}
                onPress={onRecommendedPressed}
            >
                <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 25}}>View Matches</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 25, fontWeight:'bold', textAlign:'center'}}>Start a New Match Session</Text>

            <TouchableOpacity
                style={styles.swipebutton}
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
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 20,
    },
    swipebutton: {
        alignItems: "center",
        backgroundColor: "#880808",
        padding: 20,
        paddingLeft: 80,
        paddingRight: 80,
        borderRadius: 25
    },
    recommendationbutton: {
        alignItems: "center",
        backgroundColor: "#0047AB",
        padding: 15,
        paddingLeft: 80,
        paddingRight: 80,
        borderRadius: 25
    },
    genrebutton: {
        alignItems: "center",
        backgroundColor: "#0047AB",
        padding: 15,
        paddingLeft: 80,
        paddingRight: 80,
        borderRadius: 25
    }
});

export default Home;


