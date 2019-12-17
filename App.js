import React from 'react';
import GoalPage from './components/GoalPage';
import Login from './components/Login';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    GoalPage: {
      screen: GoalPage
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })

export default createAppContainer(AppNavigator);