import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import MainTab from '../stacks/MainTab'
import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'

const Stack = createStackNavigator()

export default () => {
    return(
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen name="Preload" component={Preload}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="MainTab" component={MainTab}/>
        </Stack.Navigator>
    )
}