import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Homescreen from './app/screens/homescreen';
import Welcomescreen from './app/screens/welcomescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = ()=> {
  return(

     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen 
           name = "Home"
           component={Homescreen}
           options={{title:'The Exercise PRO'}}
           style={Styles.title}
         />

         <Stack.Screen name="Welcome" component={Welcomescreen} />

       </Stack.Navigator>
     </NavigationContainer>
  ) 

}

const Styles = StyleSheet.create({
  title:{
    color:'red'
  }
});


export default App;