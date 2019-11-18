/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import GridList from 'react-native-grid-list';
import LinearGradient from 'react-native-linear-gradient';


 
const items = [
  { thumbnail: require('../../../assets/images/apartment.jpeg') , title: "Apartment Cleaning" , id:1},
  { thumbnail: require('../../../assets/images/office.jpg'),title: "Office Cleaning" , id:2 },
  { thumbnail: require('../../../assets/images/move.jpg'), title: "Move in" , id:3 },
  { thumbnail: require('../../../assets/images/images.jpeg'),title: "Laundary Services" , id:4 },
  
];
 
export default class Home extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            active: 'first',
          };
    }
  renderItem = ({ item }) => (
    <View>
    <TouchableOpacity onPress = {() => this.pick(item.id)}>
    <Image style={styles.image} source={item.thumbnail} />
    <Text style = {{textAlign: 'center', paddingTop: 8, fontFamily: "PlayfairDisplay-Regular"}}>{item.title}</Text>
    </TouchableOpacity>
    </View>
  );
pick =(id) => {
  this.props.navigation.navigate("Subcategory", {id});
}
  render() {

    return (
        
        <LinearGradient colors={['#f9faf2', '#dcf7c8', '#c3f28a']} style={styles.linearGradient}>
      <View style={styles.container}>
        <GridList
        
          showSeparator = {true}
          separatorBorderWidth = {10}
          data={items}
          numColumns={2}
          renderItem={this.renderItem}
        />
         
      </View>
      </LinearGradient>
     
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '85%',
    borderRadius: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});
