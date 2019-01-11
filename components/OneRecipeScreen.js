import React from 'react';
import { Button, ActivityIndicator, Text, View ,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import OneRecipes from './OneRecipes';

export default class OneRecipeScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const categoryId = navigation.getParam('categoryId', '0');
    const recipesId = navigation.getParam('recipesId', '0');

    return (
    	<View style={{flex: 1, paddingTop:10}}>
	    	<Text style={styles.header1}>Resep & Cara Memasak</Text>
	        <OneRecipes categoryId={categoryId} recipesId={recipesId}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header1: {
    backgroundColor:'#af8eb5',
    color: '#424242',
    fontSize: 40,
    padding:10,
    textAlign: 'center'
  },
});
