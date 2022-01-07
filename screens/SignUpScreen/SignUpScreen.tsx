import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomInput2 from '../../components/CustomInput2';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.warn('onRegisterPressed');
    };

    const onSignInGoogle = () => {
        console.warn('Google');
    };

    const onSignUpPressed = () => {
        console.warn('onSignUpPressed');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
                />

            <CustomInput 
                placeholder="Email"
                value={email}
                setValue={setEmail}
                />

            <CustomInput2
                placeholder="Password"
                value={password}
                setValue={setPassword}
                // secureTextEntry={true}
                />

            <CustomInput2 
                placeholder="Repeat Password"
                value={passwordRepeat}
                setValue={setPasswordRepeat}
                // secureTextEntry={true}
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