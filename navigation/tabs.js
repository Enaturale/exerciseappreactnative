import React from 'react';

import{
    View, 
    Image,
    TouchableOpacity
} from 'react-native';

import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import {FirstPage} from './screens/firstpage';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Tabs =() => {
    return(
        // <NavigationContainer>
        // <Tab.Navigator>
        //     <Tab.Screen
        //     name="Home"
        //     component ={FirstPage}
        //     options={{
        //         tabBarIcon: ({focused}) => {
        //             <Image 
        //             source={require("../assets/waterh.png")}
        //             resizeMode="contain"
        //             style={{
        //                 width: 25,
        //                 height: 25,
        //                 tintColor: focused ? '#009688' : '#689F38'
        //             }}
        //             />
        //         }
        //     }}
        //      />

        // </Tab.Navigator>
        // </NavigationContainer>
        <View>
            <Text>Nothing</Text>
        </View>

    )

}

export default Tabs;