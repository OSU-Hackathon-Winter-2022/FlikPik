import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomInput2 from '../../components/CustomInput2';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import popcornImage from '../../assets/images/popcorn_controller.jpg'
import { authentication } from '../../firebase/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';


const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);


    const navigation = useNavigation();

    const function1 = () => {
        setEmail("")
        setPassword("")
    };


    const onSignInPressed = () => {
        // console.warn("Signing in");
        // validate user
        signInWithEmailAndPassword(authentication, email, password)
        .then((re) => {
            console.log(re);
            setIsSignedIn(true);
            navigation.navigate('SwipeMain')
        })
        .catch((re) => {
            console.log(re);
        })

    };

    const onSignUpPressed = () => {
        // console.warn('onSignUpPressed');
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.root}>
            <Text style={{color: '#191970', fontSize:20, fontWeight:'bold'}}>Welcome to</Text>
            <Text style={{color: '#191970', fontSize:35, fontWeight:'bold', paddingBottom:15}}>FlikPik</Text>

            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
                />

            <CustomInput2
                placeholder="Password"
                value={password}
                setValue={setPassword}
                />

            <CustomButton
                text="Sign In"
                onPress={()=> { function1(); onSignInPressed(); }}
                />

            <CustomButton 
                text="Don't have an account?"
                onPress={onSignUpPressed}
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
        padding: 60,

    },
    popImage: {
        width: '150%',
        height: '30%',
        flex: 1,
        resizeMode: 'contain',
    }
});


export default SignInScreen;