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
                    
                </Text>
                <Text style={Styles.runningText}>               
                    20 Laps             
                    
                </Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Profile')} 
                   // style={Styles.appButtonContainer}
                    >

                    <Text style={Styles.appButtonText}>See More</Text>
                </TouchableOpacity>
            </View>

               
            </View>

            <View style= {Styles.rectangleskip}>
            <Image  style={Styles.skipPng}
            source={require("../assets/skip.png")}
            />

            <View style={{flexDirection:'column'}}>
                <Text style={Styles.rectangleText}>               
                    Jumping Rope
                                       
                </Text>
                <Text style={Styles.rectangleText}>               
                    40 Counts
                                       
                </Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Profile')} 
                   // style={Styles.appButtonContainer}
                    >

                    <Text style={Styles.appButtonTextSkip}>See More</Text>
                </TouchableOpacity>

            </View>
               
            </View>

            <View style= {Styles.rectangleTummy}>
            <Image  style={Styles.waterPng}
            source={require("../assets/tummy.png")}
            />
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column'}}>
                <Text style={Styles.rectangleText}>              
                    
                   Tummy Exercises
                </Text>
                <Text style={Styles.rectangleTextTummy}>
                    20 times
                </Text>
                </View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Profile')} 
                   // style={Styles.appButtonContainer}
                    >

                    <Text style={Styles.appButtonTextTummy}>See More</Text>
                </TouchableOpacity>
            </View>

            </View>

            <View style= {Styles.rectangleYoga}>
            <Image  style={Styles.yogaPng}
            source={require("../assets/yoya.png")}
            />
            <View style={{flexDirection:"column"}}>
                <Text style={Styles.yogaText}>              
                   
                   Yoga                   
                </Text>
                <Text style={Styles.yogaText}>              
                   
                   Start your day with a dose of relaxing exercises.                 
                </Text>
            </View>
            </View>

            <View style={{height: 50}}>

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
    rectangleYoga: {
        width: 100 * 3.8,
        height: 240,
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
    rectangleTummy: {
        width: 100 * 3.8,
        height: 240,
        backgroundColor: "#689F38",
        paddingLeft: -70,
        paddingRight:  20,
        paddingTop: 20,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: 'center',
        borderColor: '#689F38',
        borderStyle: 'solid',
        borderWidth: 2,
        flexDirection: 'column',
       
              
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
rectangleskip: {
        width: 100 * 3.8,
        height: 200,
        backgroundColor: "#F44336",
        paddingLeft: -70,
        paddingRight:  20,
        paddingTop: 20,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: 'center',
        borderColor: '#F44336',
        borderStyle: 'solid',
        borderWidth: 2,
        flexDirection: 'row',
       
              
},
waterPng:{
         height: 130,
        // width: 160,

},
skipPng:{
        height: 160,
       // width: 160,
       marginLeft: 20, 

},
yogaPng:{
    
   // width: 160,
   marginLeft: 20,
   marginTop: 20, 

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
yogaText:{
    color: 'white',
    fontSize: 18,
    fontWeight:'normal',
    width: 220,
    marginLeft: 0,
    marginTop: 20,
    letterSpacing: 2,

},
rectangleTextTummy:{
        color: 'white',
        fontSize: 18,
        fontWeight:'normal',
        width: 220,
        marginLeft: 20,
        marginTop: 0,
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
    marginTop: 30,
    marginLeft: 60,
    
},
appButtonTextSkip: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    // textTransform: "uppercase",
    marginTop: 40,
    marginLeft: 60,
    
},
appButtonTextTummy: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    // textTransform: "uppercase",
    marginTop: 40,
    marginLeft: 10,
    
},
})

export default FirstPage;