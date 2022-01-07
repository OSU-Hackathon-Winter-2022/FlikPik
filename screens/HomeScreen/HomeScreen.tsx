import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View>
            <Text style={styles.title}>Movie Dashboard</Text>

            <Text style={styles.header}>Recomended Movies based on past matches</Text>

            <Text style={styles.header}>New Matchmaking Session</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    header: {
        fontSize: 30,

        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
});

export default Home;


