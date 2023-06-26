import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default HomePage;
