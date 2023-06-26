import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';

const LoginPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Page</Text>

            <TextInput
                placeholder="Email"
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                style={styles.input}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Go to Register Page</Text>
            </TouchableOpacity>
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
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10,
        marginTop: 10,

    }
});

export default LoginPage;
