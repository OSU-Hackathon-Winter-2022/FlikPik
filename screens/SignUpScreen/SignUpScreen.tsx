import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomInput2 from '../../components/CustomInput2';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { authentication } from '../../firebase/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';



const SignUpScreen = () => {
    // const [username, setUsername] = useState('');
    // const [passwordRepeat, setPasswordRepeat] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        // console.warn('onRegisterPressed');
        createUserWithEmailAndPassword(authentication, email, password)
        .then((re) => {
            console.log(re);
            setIsSignedIn(true);
            navigation.navigate('Test')
        })
        .catch((re) => {
            console.log(re);
        })
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>

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
                text="Register"
                onPress={onRegisterPressed}
                type="TERTIARY"
                />
            <Text style={styles.text}>
                By registering, you confirm that you accept our Terms of Use and Privacy Policy
            </Text>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
});

export default SignUpScreen;