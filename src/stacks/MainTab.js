import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomTabBar from '../components/CustomTabBar'

import Home from '../screens/Home'
import Register from '../screens/Register'
import PointRegister from '../screens/PointRegister'
import HourBank from '../screens/HourBank'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

export default () => {
    return (
        <Tab.Navigator tabBar={props=> <CustomTabBar {...props}/>}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Register" component={Register} />
            <Tab.Screen name="PointRegister" component={PointRegister} />
            <Tab.Screen name="HourBank" component={HourBank} />
            <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
    )
};