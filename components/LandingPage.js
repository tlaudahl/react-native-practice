import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

export default function LandingPage(props) {
    return (
        <View style={styles.screen}>
            <Text style={styles.header}>TO DO APP</Text>
            <View style={styles.btnContainer}>
                <Button title='Login' style={styles.button} onPress={() => props.navigation.navigate('Login')}/>
                <Button title='Register' style={styles.button} onPress={() => props.navigation.navigate('Register')}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginBottom: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        width: '50%'
    },
    button: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    screen: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})