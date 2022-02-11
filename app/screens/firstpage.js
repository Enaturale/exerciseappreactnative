import React from 'react';
import {View, Text, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native';

const FirstPage=() => {
    return(
        <View>
            <Text style={Styles.title}>Welcome! It is another day in Paradise.</Text>
            <View style= {Styles.rectangle}>
                <Text>
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
        color: "#555555",
        fontSize: 15,
        marginLeft: 20,
        marginTop: 20,

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
        
      
    }
})

export default FirstPage;