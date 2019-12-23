import React, { useState, useRef } from 'react'
import { Text, TextInput, View, StyleSheet, Alert, Button } from 'react-native';

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
            <TextInput style={styles.input} placeholder='Username' returnKeyType={"next"} onChange={username => setRegisterState({...registerState, username: username.nativeEvent.text})} onSubmitEditing={() => passwordRef.current.focus()} />
            <TextInput ref={passwordRef} style={styles.input} placeholder='Password' returnKeyType={"next"} onChange={password => setRegisterState({...registerState, password: password.nativeEvent.text })} onSubmitEditing={() => confirmPasswordRef.current.focus()} />
            <TextInput ref={confirmPasswordRef} style={styles.input} placeholder='Confirm Password' returnKeyType={"go"} onChange={confirmedPassword => setRegisterState({...registerState, confirmedPassword: confirmedPassword.nativeEvent.text})} onSubmitEditing={() => props.navigation.navigate('Login')} />
            <Button title='Register' onPress={() => {
                if(registerState.username.length === 0) {
                    Alert.alert('Please provide a username to register')
                } else if (registerState.password.length === 0 || registerState.confirmedPassword.length === 0) {
                    Alert.alert('Please provide and confirm a password to register')
                } else if (registerState.password !== registerState.confirmedPassword) {
                    Alert.alert('The passwords do not match')
                } else {
                    props.navigation.navigate('Login')
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
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        padding: 10,
        marginBottom: 10

    }
})
