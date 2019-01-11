import React from 'react';
import { FlatList,
         ActivityIndicator, 
         Image,
         Text, 
         View ,
         TextInput,
         StyleSheet,} from 'react-native';
import { withNavigation } from 'react-navigation';

import SearchableFlatlist from "searchable-flatlist";


import Recipe from './Recipe';

class Recipes extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
      url:"" , searchTerm:""}
  }

  componentDidMount(){
    return fetch('https://food-recipes-api.herokuapp.com/recipes')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson[this.props.categoryId].recipes,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => (
  <Recipe 
    ingredients={item.ingredients} 
    item={item}
    index={index}
    onPressItem={this._onPressItem}/>
    );

  _onPressItem =(index) => {
         this.props.navigation.push('OneRecipe', {
              categoryId: this.props.categoryId,
              recipesId:index,
            });
      };

  render(){
    const { navigation } = this.props;

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>
      <Text style={styles.header2}>{this.state.dataSource[0].category} Recipes</Text>
      <TextInput
          placeholder={"Search"}
          style={styles.sSearchBar}
          onChangeText={searchTerm => this.setState({ searchTerm })}
        />
        <SearchableFlatlist
          searchProperty={"name"}
          searchTerm={this.state.searchTerm}
          data={this.state.dataSource}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
  header2: {
    backgroundColor:'#81b9bf',
    color: '#006064',
    fontSize: 30,
    padding:5,
    paddingTop:10,
    paddingBottom:10,
    textAlign: 'center'
  },
});

export default withNavigation(Recipes);