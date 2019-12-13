import React, { useState } from 'react'
import { TextInput, Button, StyleSheet, View, Modal } from 'react-native';

export default function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.isAddMode} animationType='slide'>
            <View style={ styles.inputContainer }>
                <TextInput
                placeholder='Course Goal' 
                style={ styles.input } 
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <Button title='CANCEL' color='red' onPress={props.cancelGoal} />
                <Button title="ADD" style={{ padding: 5 }} onPress={addGoalHandler}/>
            </View>
        </Modal>
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
    }
})