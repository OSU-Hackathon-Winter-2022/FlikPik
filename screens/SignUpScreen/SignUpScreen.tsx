import React from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomInput2 from '../../components/CustomInput2';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { authentication, database, databaseRef } from '../../firebase/firebase-config';
import { set, ref, get, child } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

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
            // Get new userid from Firebase
            const auth = getAuth();
            const user = auth.currentUser;
            const uid = user.uid;
            // Get blank_user_db from Firebase
            get(child(databaseRef, 'new_user_db')).then((snapshot) => {
                let user_db = snapshot.val();
                if (snapshot.exists()) {
                    // Initialize new user's db under their userid
                    set(ref(database, "user_" + uid), {
                        "unswiped_movies" : user_db["unswiped_movies"],
                    });
                    console.log();
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
            console.error(error);
            });
            // Carry on with onboarding
            console.log(re);
            setIsSignedIn(true);
            navigation.navigate('SwipeMain')
        })
        .catch((re) => {
            console.log(re);
            Alert.alert(
                "Registration",
                "Please enter in an email and password to create an account",
                [
                    {
                        text: "OK", onPress: () => console.log("Ok pressed"),
                        style: "cancel"
                    }
                ]
            )
        });
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