

import React from 'react';
import { FlatList,
         ActivityIndicator, 
         Image,
         Text, 
         View ,
         ScrollView,
         StyleSheet,
         TouchableWithoutFeedback,
         Alert} from 'react-native';
import { withNavigation } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';


class OneRecipes extends React.Component {


  constructor(props){
    super(props);
    this.state ={ isLoading: true,
      method:false,
      content:'',
}
  }

  componentDidMount(){
    return fetch('https://food-recipes-api.herokuapp.com/recipes')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson[this.props.categoryId].recipes[this.props.recipesId],

        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

   _onPressIngredients() {
      Alert.alert('You tapped the button!')
  }

  _onPressMethod() {
      this.setState({ method:true, });
  }

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
		      <Text style={styles.header2}>
            <Text style={{color:'#212121'}}>
              {this.state.dataSource.category}/
            </Text>
            {this.state.dataSource.name}
          </Text>
          <ScrollView>
          <View style={styles.containerScroll}>
            <View style={styles.containerImage}>
              <ImageSlider images={[
    'http://placeimg.com/640/480/any',
    'http://placeimg.com/640/480/any',
    'http://placeimg.com/640/480/any'
  ]}/>
            </View>

            <View style={styles.layout}>
              <TouchableWithoutFeedback
              onPress={() => {this.setState({ method:false });}}>
                  <View 
                  style={styles.button}>
                    <Text style={[styles.header4, this.state.method ? {} : styles.buttonOn]}>Ingredients</Text>
                  </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
              onPress={() => {this.setState({ method:true });}}>
                  <View style={styles.button}>
                    <Text style={[styles.header4,!this.state.method ? {} : styles.buttonOn]}>Method</Text>
                  </View>
              </TouchableWithoutFeedback>
            </View>
		      	<Text style={styles.content}>
              {this.state.method ? 
                this.state.dataSource.method.map((word) => '✽ ' + word + ',\n')
                :
                this.state.dataSource.ingredients.map((word) => '✽ ' + word + ',\n')
              }
            </Text>
          </View>
          
          </ScrollView>
	     	</View>
       	
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
  containerScroll: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  containerImage: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header2: {
    backgroundColor:'#e1bee7',
    color: '#424242',
    fontSize: 30,
    padding:5,
    paddingTop:10,
    paddingBottom:10,
    textAlign: 'center'

  },
  header4: {
    flex: 1,
    backgroundColor:'#c48b9f',
    color: '#616161',
    fontSize: 25,
    padding:10,
    margin:5,
    textAlign: 'center'
  },
   content: {
    backgroundColor:'#f8bbd0',
    color: '#616161',
    fontSize: 20,
    padding:15,
    margin:5,

  },
    imag: {
      flex: 1, justifyContent: 'center',
      width:400,
      height:400,
      borderWidth:1,
      borderColor:'#333',
      borderRadius:2,
  },
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  button: {
    flex: 1,
  },
  buttonOn: {
    backgroundColor:'#f8bbd0',
  },
 
});

export default withNavigation(OneRecipes);