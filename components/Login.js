import React, { useRef } from 'react'
import { StyleSheet, View, FlatList, Button, TextInput, Text } from 'react-native';

export default function Login(props) {
    const nextButton = useRef();

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.heading}>Login</Text>
            <TextInput style={styles.input} placeholder='Username' returnKeyType={'next'} onSubmitEditing={() => nextButton.current.focus()} />
            <TextInput ref={nextButton} style={styles.input} placeholder='password' secureTextEntry={true} returnKeyType='done' autoCapitalize='none' autoCorrect={false} onSubmitEditing={() => props.navigation.navigate('GoalPage')}/>
            <Button title='Login' onPress={() => props.navigation.navigate('GoalPage')}/>
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
