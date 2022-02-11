import React from 'react';
import {View, Text, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native';


const FirstPage=() => {
    return(
        <View>
            <Text style={Styles.title}>It is another day in Paradise. 
           
            </Text>

            <View style= {Styles.rectangle}>
                <Text style={Styles.rectangleText}>
                    Smart running
                    Smart running
                    Smart running
                    Smart running
                    Smart running
                    Smart running
                    Smart running
                    Smart running 
                </Text>
            </View>
        </View>

    )
}


const Styles = StyleSheet.create({
    title:{
        color: "#00796B",
        fontSize: 15,
        marginLeft: 20,
        marginTop: 20,
        fontWeight:'bold',

    },
    rectangle: {
        width: 100 * 3.8,
        height: 150,
        backgroundColor: "#009688",
        paddingLeft: 20,
        paddingRight:  20,
        paddingTop: 20,
        marginTop: 40,
        borderRadius: 10,
        alignSelf: 'center',
        
      
    },
    rectangleText:{
        color: 'white'
    }
})

export default FirstPage;