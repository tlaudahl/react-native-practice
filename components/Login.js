import React, { useRef, useState } from 'react'
import { StyleSheet, View, FlatList, Button, TextInput, Text, Alert, AsyncStorage } from 'react-native';

export default function Login(props) {
    const nextButton = useRef();

    const [initlaState, setInitalState] = useState({
        username: '',
        password: '',
    })

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.heading}>Login</Text>
            <TextInput style={styles.input} placeholder='Username' returnKeyType={'next'} onSubmitEditing={() => nextButton.current.focus()} onChange={username => setInitalState({...initlaState, username})}/>
            <TextInput ref={nextButton} style={styles.input} placeholder='password' secureTextEntry={true} returnKeyType='done' autoCapitalize='none' autoCorrect={false} onSubmitEditing={() => props.navigation.navigate('GoalPage')} onChange={password => setInitalState({...initlaState, password})}/>
            <Button title='Login' onPress={() => {
                if(initlaState.username.length === 0) {
                    Alert('You must provide a username before logging in')
                } else if (initlaState.password.length === 0) {
                    Alert('You must provide a password to login')
                } else {
                    props.navigation.navigate('GoalPage')
                }
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black', 
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    heading: {
        fontSize: 30,
        marginBottom: 5
    }
})
