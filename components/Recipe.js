import React from 'react';
import { FlatList,
         ActivityIndicator, 
         Image,
         Text, 
         View ,
         StyleSheet,TouchableOpacity,} from 'react-native';

export default class Recipe extends React.Component {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }
  render(){
    const item = this.props.item;

   return(
    <View style={styles.container}>
      <TouchableOpacity onPress={this._onPress} style={{flex: 1,
    flexDirection: 'row',justifyContent: 'center',alignItems: 'stretch',}}>
    
          { 
            (typeof(item.img) === 'string') ? 
            <Image style={styles.imag} source={{uri: item.img }}/> :
            <Image style={styles.imag} source={{uri: item.img[0] }}/> 
          }
          
          <Text style={styles.header3} numberOfLines={3}>
            {item.name}
          </Text>
      </TouchableOpacity>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    padding:10,
  },
  header3: {
    flex: 2, justifyContent: 'center',
    backgroundColor:'#b2ebf2',
    color: '#006064',
    fontSize: 20,
    padding:5,
    textAlign: 'justify',
    textAlignVertical:'center',
    marginLeft:10,


  },
    imag: {
      justifyContent: 'center',
      width:100,
      height:100,
      borderWidth:1,
      borderColor:'#333',
      borderRadius:5,
  },
});