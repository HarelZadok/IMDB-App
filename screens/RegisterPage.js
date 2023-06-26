import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const RegisterPage = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log(date.toDateString())
    }, [date])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Register Page</Text>
            <TextInput
                placeholder="Name"
                style={styles.input}
            />

            <TextInput
                placeholder="Last Name"
                style={styles.input}
            />

            <DateTimePicker style={{alignSelf: 'center', ...styles.input}}
                            minimumDate={new Date(1900, 0, 1)}
                            maximumDate={new Date()}
                            display={'inline'}
                            value={date}
                            onChange={(event, date) =>
                                setDate(date)
                            }/>

            <TextInput
                placeholder="Email"
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
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

export default RegisterPage;
