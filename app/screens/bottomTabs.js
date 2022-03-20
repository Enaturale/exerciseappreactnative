import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './homescreen';
import PersonalDetails from './personaldetails';
import Progress from './progress';
import Welcomescreen from './welcomescreen';
import FirstPage from './firstpage';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Hey" component={FirstPage} />
        <Tab.Screen name="Profile" component={PersonalDetails}/>
        <Tab.Screen name="Progress" component={Progress} />
    </Tab.Navigator>
  )
}

export default BottomTabs;