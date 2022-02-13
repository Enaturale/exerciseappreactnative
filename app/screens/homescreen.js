import React from 'react';
import {View, Text, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native';


const Homescreen = ({navigation})=> {
  return(
    <View>
    <View style={styles.container}>
      <Text style={styles.text}>
        Would you like to STAY FIT?
      </Text>
      </View>
      

    <TouchableOpacity 
           onPress={() => navigation.navigate('Welcome')} 
           style={styles.appButtonContainer}>

         <Text style={styles.appButtonText}>Let's Begin</Text>
    </TouchableOpacity>

    
    </View>
  )

}

const styles = StyleSheet.create({
    text:{
        fontSize: 25,
        // color: '#D32F2F', 
        marginBottom: 20,   
        fontWeight: 'bold'         
    },
    container:{
        justifyContent: 'center',
        alignItems:'center',
        alignContent:'center',
        marginTop: 300, 
       
    },
    button:{
        fontSize: 40,
        paddingVertical: 20,
        paddingHorizontal: 90,
        fontWeight: 'bold',

    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 20,
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})


export default Homescreen;