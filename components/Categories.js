import React from 'react';
import { FlatList,
         ActivityIndicator, 
         Image,
         Text, 
         View ,
         StyleSheet,} from 'react-native';
import { withNavigation } from 'react-navigation';

import Category from './Category';

class Categories extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
      url:""}
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

  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => (
  <Category 
    ingredients={item.ingredients} 
    item={item}
    index={index}
    onPressItem={this._onPressItem}/>
    );

  _onPressItem =(index) => {
         this.props.navigation.push('Details', {
              categoryId: index,
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
        <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          numColumns={3}
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
});

export default withNavigation(Categories);