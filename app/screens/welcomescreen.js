import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';


const Welcomescreen = ()=> {
  return(
    <View style={Styles.mainContainer}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.mainText}>
            Welcome!
        </Text>

        <Text style={Styles.otherText}>
            We need a few details about you.
        </Text>
      </View>

        <View style={Styles.textinputcontainer}>
          <TextInput placeholder="Email" style={Styles.textinput}/>
          <TextInput secureTextEntry={true} placeholder="Password" style={Styles.textinput} />          
        </View>

        <View style={Styles.submit}>
        <TouchableOpacity 
           onPress={() => Alert.alert('Details Submitted')} 
           style={Styles.appButtonContainer}>

         <Text style={Styles.appButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>

        
        <View>
        <TouchableOpacity 
           onPress={() => Alert.alert('Details Submitted')} 
           style={Styles.googleButtonContainer}>

         <Text style={Styles.googleButtonText}>Sign in With Google</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity 
           onPress={() => Alert.alert('Details Submitted')} 
           style={Styles.facebookButtonContainer}>

         <Text style={Styles.facebookButtonText}>Sign in With Facebook</Text>
        </TouchableOpacity>
        </View>
        
    </View>
  )
}

const Styles = StyleSheet.create({
  mainContainer:{
  
   
       
  },
  titleContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,

  },
  mainText:{
    fontSize: 30,
    color: "#009688",
    fontWeight: 'bold',
    
  },
  otherText:{
    fontSize: 20,
    color: "#009688",
  },
  textinputcontainer:{
    marginTop: 40,
    marginBottom: 40,


  },
  textinput:{
    borderColor:'#ABB8C3',
    borderWidth: 1,

  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  submit:{
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 30,   
  },
  googleButtonContainer: {
    elevation: 8,
    backgroundColor: "#D32F2F",
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  googleButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  facebookButtonContainer: {
    elevation: 8,
    backgroundColor: "#0D47A1",
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 20,

  },
  facebookButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  


})


export default Welcomescreen;