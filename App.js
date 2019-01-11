import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './components/HomeScreen';
import RecipesScreen from './components/RecipesScreen';
import OneRecipeScreen from './components/OneRecipeScreen';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: RecipesScreen,
    OneRecipe:OneRecipeScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}