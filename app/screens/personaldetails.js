import React from 'react';
import {View, Text, StyleSheet, Button, Alert, TouchableOpacity, TextInput} from 'react-native';

const PersonalDetails = () => {
    return(
        <View>
            <Text>Personal Details</Text>

            <View>
                <TextInput placeholder ="Username" />
                <TextInput placeholder ="Username" />
                <TextInput placeholder ="Username" />
                <TextInput placeholder ="Username" />

                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    
})

export default PersonalDetails;