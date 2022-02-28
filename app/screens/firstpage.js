import React from 'react';
import {View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image,
    ScrollView
} from 'react-native';


const FirstPage=({navigation}) => {
    return(
        <ScrollView style={Styles.body}>
            <View style={Styles.titlePart}>
            <Text style={Styles.title}>It is another day in Paradise. 
            <Image  style={Styles.emoji}
            source={require("../assets/smiley.png")}
            />
            </Text>

            
            </View>

            <View style= {Styles.rectangle}>
            <Image  style={Styles.waterPng}
            source={require("../assets/waterh.png")}
            />
                <Text style={Styles.rectangleText}>               
                    Did you know that taking 8 
                    cups of water a
                    day can help you stay hydrated?
                   
                </Text>
            </View>

            <Text style={Styles.title}>Choose your workout. </Text>

            <View style= {Styles.rectanglerun}>
            <Image  style={Styles.runningPng}
            source={require("../assets/run.png")}
            />
            <View style={{flexDirection:'column'}}>
                <Text style={Styles.runningText}>               
                    Running
                    20 Laps             
                    
                </Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Profile')} 
                   // style={Styles.appButtonContainer}
                    >

                    <Text style={Styles.appButtonText}>See More...</Text>
                </TouchableOpacity>
            </View>

               
            </View>

            <View style= {Styles.rectangle}>
            <Image  style={Styles.waterPng}
            source={require("../assets/waterh.png")}
            />
                <Text style={Styles.rectangleText}>               
                    Jumping Rope
                   
                </Text>
            </View>

            <View style= {Styles.rectangle}>
            <Image  style={Styles.waterPng}
            source={require("../assets/waterh.png")}
            />
                <Text style={Styles.rectangleText}>               
                    
                   Tummy Exercises
                </Text>
            </View>

            <View style= {Styles.rectangle}>
            <Image  style={Styles.waterPng}
            source={require("../assets/waterh.png")}
            />
                <Text style={Styles.rectangleText}>               
                   
                   Weights
                   
                </Text>
            </View>
        </ScrollView>

    )
}


const Styles = StyleSheet.create({
    body:{
        // backgroundColor:"#ABB8C3",
        height: "100%",
    },
    titlePart:{
        
    },
    title:{
        color: "#009688",
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
        paddingLeft: -70,
        paddingRight:  20,
        paddingTop: 20,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: 'center',
        borderColor: '#009688',
        borderStyle: 'solid',
        borderWidth: 2,
        flexDirection: 'row',
       
              
    },
    rectanglerun: {
        width: 100 * 3.8,
        height: 180,
        backgroundColor: "#FBC02D",
        paddingLeft: 20,
        paddingRight:  20,
        paddingTop: 20,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: 'center',
        borderColor: '#FBC02D',
        borderStyle: 'solid',
        borderWidth: 2,
        flexDirection: 'row',
       
              
    },
    waterPng:{
         height: 130,
        // width: 160,

    },
    rectangleText:{
        color: 'white',
        fontSize: 18,
        fontWeight:'normal',
        width: 220,
        marginLeft: 20,
        marginTop: 20,
        letterSpacing: 2,
    
    },
    runningPng:{
        height: 130,
        //width: 160,

   },
   runningText:{
    color: 'black',
    fontSize: 18,
    fontWeight:'normal',
    width: 220,
    marginLeft: 40,
    marginTop: 20,
    letterSpacing: 2,


   },
   appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    marginLeft: 100,
    marginHorizontal: 20,
    
    
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    // textTransform: "uppercase",
    marginTop: 60,
    marginLeft: 60,
    
  },
})

export default FirstPage;