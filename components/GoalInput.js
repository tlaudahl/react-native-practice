import React, { useState } from 'react'
import { TextInput, Button, StyleSheet, View } from 'react-native';

export default function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={ styles.inputContainer }>
            <TextInput
            placeholder='Course Goal' 
            style={ styles.input } 
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button title="ADD" style={{ padding: 5 }} onPress={() => props.addGoalHandler(enteredGoal)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: '80%',
        borderColor: 'black', 
        borderWidth: 1,
    }
})