import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './screens/LoginPage';
import RegisterPage from "./screens/RegisterPage";
import HomePage from "./screens/HomePage";
import {SafeAreaView, StatusBar} from "react-native";

const Stack = createStackNavigator();

export default function App() {
    return <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle="dark-content"/>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginPage}/>
                <Stack.Screen name="Register" component={RegisterPage}/>
                <Stack.Screen name="Home" component={HomePage}/>
            </Stack.Navigator>
        </SafeAreaView>
    </NavigationContainer>
}
