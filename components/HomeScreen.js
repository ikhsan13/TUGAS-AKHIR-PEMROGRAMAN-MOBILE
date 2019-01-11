import React from 'react';
import { Button, ActivityIndicator, Text, View ,StyleSheet,FlatList,Image} from 'react-native';

import Categories from './Categories';


export default class HomeScreen extends React.Component {
    constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://food-recipes-api.herokuapp.com/recipes')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  static navigationOptions = {
    headerRight: <Image
        source={{uri: 'http://4.bp.blogspot.com/-tQs3Nnog1yg/WPRoCxLW8oI/AAAAAAAABWs/8d767F9sxWgb1zGp2moaTjrR_gqu1qT5gCK4B/s1600/TEXT%2BHERE.png'}}
        style={{ width: 50, height: 50 ,margin:10,}}
      />,
    title: 'Menu',
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTitleStyle: {
      color: '#fafafa',
    },
  };
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:10,}}>
        <Categories/>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});
