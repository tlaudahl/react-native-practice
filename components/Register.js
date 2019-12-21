import React, { useState, useRef } from 'react'
import { Text, TextInput, View, StyleSheet, Alert } from 'react-native';

export default function Register(props) {
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [registerState, setRegisterState] = useState({
        username: '',
        password: '',
        confirmedPassword: '',
    })
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.heading}>Register</Text>
            <TextInput style={styles.input} placeholder='Username' returnKeyType={"next"}></TextInput>
            <TextInput ref={passwordRef} style={styles.input} placeholder='Password' returnKeyType={"next"}></TextInput>
            <TextInput ref={confirmPasswordRef} style={styles.input} placeholder='Confirm Password' returnKeyType={"next"}></TextInput>
            <Button title='Register' onPress={() => {
                if(registerState.username.length === 0) {
                    Alert('Please provide a username to register')
                } else if (registerState.password.length === 0 || registerState.confirmedPassword.length === 0) {
                    Alert('Please provide a password to register')
                } else if (registerState.password !== registerState.confirmedPassword) {
                    Alert('The passwords do not match')
                } else {
                    props.navigation.navigate('Login'
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    )
                }
            }}  />
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 30,
        marginBottom: 5
    }
})
