import React, { useState, useRef } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const flatListRef = useRef();

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId)
    })
  }

  const cancelGoal = () => {
    setIsAddMode(false);
  }


  return (
    <View style={ styles.screen }>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput cancelGoal={cancelGoal} isAddMode={isAddMode} addGoalHandler={addGoalHandler} />
      <FlatList ref={flatListRef} onContentSizeChange={() => flatListRef.current.scrollToEnd()} data={courseGoals} renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} /> } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
