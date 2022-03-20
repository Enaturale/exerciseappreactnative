import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert, TouchableOpacity, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker'

const PersonalDetails = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState();
    return(
        <View>
            <Text style={Styles.personal}>Personal Details</Text>

            <View>
                <TextInput style={Styles.textinput} placeholder ="Username" />
                <Picker
                   selectedValue={selectedValue}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                   </Picker>
                <TextInput placeholder ="Gender" />
                <TextInput placeholder ="Username" />
                <TextInput placeholder ="Username" />

                <TouchableOpacity
                   onPress={() => {
                  Alert.alert('Details Submitted'), 
                  navigation.navigate('The Exercise PRO!')             
                }} 
               style={Styles.appButtonContainer} >

                <Text style={Styles.appButtonText}>Submit</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    personal:{
        marginTop: 50,
        fontSize: 25,
        color: "#009688",
        fontWeight: 'bold',
        alignSelf:'center',
        justifyContent: 'center',
        marginBottom: 10,

    },
    textinput:{
        borderColor:'#ABB8C3',
        borderWidth: 1,
        fontSize: 18,
    
      },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 8
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
     
})

export default PersonalDetails;