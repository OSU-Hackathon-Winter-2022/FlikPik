import React from 'react';
import { Text, View, TextInput, StyleSheet,useWindowDimensions, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import index from '../HomeScreen';
import Swipe from '../SwipeScreen';
import Recommendations from '../RecommendationsScreen';
import popcornImage from '../../assets/images/popcorn_controller.jpg'



const Test = () => {

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onHomePressed = () => {
        // console.warn("Signing in");
        navigation.navigate('Home')
    };
    const onGenrePressed = () => {
        // console.warn("Signing in");
        navigation.navigate('Genre')
    };
    const onSwipePressed = () => {
        // console.warn("Signing in");
        navigation.navigate('Swipe')
    };
    const onRecommendationsPressed = () => {
        // console.warn("Signing in");
        navigation.navigate('Recommendations')
    };
    const onChatPressed = () => {
        // console.warn("Signing in");
        navigation.navigate('Chat')
    };



    return (
        <View style={styles.root}>
            <Text style={{color: '#191970', fontSize:20, fontWeight:'bold'}}>Welcome to</Text>
            <Text style={{color: '#191970', fontSize:35, fontWeight:'bold', paddingBottom:15}}>FlikPik</Text>


            <CustomButton
                text="Home Page"
                onPress={onHomePressed}
                />
            <CustomButton
                text="Genre Page"
                onPress={onGenrePressed}
                />
            <CustomButton
                text="Swipe Page"
                onPress={onSwipePressed}
                />
            <CustomButton
                text="Recommendation Page"
                onPress={onRecommendationsPressed}
                />
            <CustomButton
                text="Chat Page"
                onPress={onChatPressed}
                />

            {/* <CustomButton 
                text="Don't have an account? Sign Up"
                onPress={onSignUpPressed}
                type="TERTIARY"
                /> */}

            <Image style={styles.popImage} source={popcornImage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,

    },
    popImage: {
        width: '150%',
        height: '30%',
        flex: 1,
        resizeMode: 'contain',
    }
});


export default Test;