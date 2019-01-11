import React from 'react';
import { Button, ActivityIndicator, Text, View ,StyleSheet,Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import Recipes from './Recipes';

export default class RecipesScreen extends React.Component {
    static navigationOptions = {
    headerRight: <Image
        source={{uri: 'https://theenterprise.net/wp-content/uploads/2017/12/food_icon_1513792355.png'}}
        style={{ width: 50, height: 50 ,margin:10,}}
      />,
    title: 'Recipes',
    headerStyle: {
      backgroundColor: '#0097a7',
    },
    headerTitleStyle: {
      color: '#fafafa',
    },
  };
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const categoryId = navigation.getParam('categoryId', '0');
    //const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
    	<View style={{flex: 1, paddingTop:10}}>
	        <Recipes categoryId={categoryId}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
});
