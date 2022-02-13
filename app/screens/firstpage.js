import React from 'react';
import {View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image} from 'react-native';


const FirstPage=() => {
    return(
        <View>
            <View style={Styles.titlePart}>
            <Text style={Styles.title}>It is another day in Paradise. 
            <Image  style={Styles.emoji}
            source={require("../assets/smiley.png")}
            />
            </Text>

            
            </View>

            <View style= {Styles.rectangle}>
            <Image  style={Styles.waterPng}
            source={require("../assets/drink.jpg")}
            />
                <Text style={Styles.rectangleText}>
               
                    Did you know that taking 8 cups of water 
                    everyday or a cup of water every hour can help prevent diseases?
                </Text>
            </View>
        </View>

    )
}


const Styles = StyleSheet.create({
    titlePart:{
        
    },
    title:{
        color: "#4CAF50",
        fontSize: 20,
        marginLeft: 20,
        marginTop: 25,        
    },
    emoji:{
        height: 25,
        width: 25,
    },
    rectangle: {
        width: 100 * 3.8,
        height: 180,
        backgroundColor: "#009688",
        paddingLeft: 20,
        paddingRight:  20,
        paddingTop: 20,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: 'center',
              
    },
    rectangleText:{
        color: 'white'
    }
})

export default FirstPage;