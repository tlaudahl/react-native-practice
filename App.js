import React from 'react';
import GoalPage from './components/GoalPage';
import Login from './components/Login';
import Register from './components/Register';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
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