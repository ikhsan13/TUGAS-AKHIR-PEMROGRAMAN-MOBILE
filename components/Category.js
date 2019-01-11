import React from 'react';
import { FlatList,
         ActivityIndicator, 
         Image,
         Text, 
         View ,
         StyleSheet,TouchableOpacity,} from 'react-native';

export default class Category extends React.Component {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }
  render(){
    const item = this.props.item;
   return(
    <View style={styles.container}>
      <TouchableOpacity onPress={this._onPress}>
        <Image style={styles.imag} source={{uri: item.image}}/>
        <Text style={styles.header3}>
          {item.category}
        </Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    padding:10,
  },
  header3: {
    backgroundColor:'#81b9bf',
    color: '#006064',
    fontSize: 20,
    padding:5,
    marginTop:5,
    textAlign: 'center',
  },
    imag: {
      width:120,
      height:120,
      borderWidth:1,
      borderColor:'#333',
      borderRadius:5,
  },
});