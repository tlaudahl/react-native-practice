import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const flatListRef = useRef();

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);
  }


  return (
    <View style={ styles.screen }>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList ref={flatListRef} onContentSizeChange={() => flatListRef.current.scrollToEnd()} data={courseGoals} renderItem={itemData => <GoalItem onDelete={() => console.log('clicked')} title={itemData.item.value} /> } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
