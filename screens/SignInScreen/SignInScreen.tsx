import React from 'react';
import { Text, View, TextInput, StyleSheet, useWindowDimensions, Image } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';
import CustomInput2 from '../../components/CustomInput2';
import { useNavigation } from '@react-navigation/native';
import index from '../HomeScreen';
import popcornImage from '../../assets/images/popcorn_controller.jpg'
// import Logo from '../../assets/images/popcorn.jpg';


const SignInScreen = () => {

    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in");
        // validate user

        navigation.navigate('Home')
    };
    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password');
    };
    const onSignInGoogle = () => {
        console.warn('Google');
    };
    const onSignUpPressed = () => {
        console.warn('onSignUpPressed');

        navigation.navigate('SignUp');
    };
    return (

        <View style={styles.root}>

            <Text style={{color: '#191970', fontSize:20, fontWeight:'bold'}}>Welcome to</Text>
            <Text style={{color: '#191970', fontSize:35, fontWeight:'bold', paddingBottom:15}}>FlikPik</Text>

            <CustomInput 
                placeholder="Username"
                value={username}
                setValue={setUsername}
                />

            <CustomInput2 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                />

            <CustomButton 
                text="Sign In"
                onPress={onSignInPressed}
                />

            <CustomButton 
                text="Forgot Password?"
                onPress={onForgotPasswordPressed}
                type="TERTIARY"
                />

            <CustomButton 
                text="Sign In with Google"
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
                />

            <CustomButton 
                text="Don't have an account? Create One"
                onPress={onSignUpPressed}
                type="TERTIARY"
                />
            
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




export default SignInScreen;