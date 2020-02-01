/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import GridList from 'react-native-grid-list';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Button} from 'react-native-elements';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import styles from './styles';
 
const items = [
  { thumbnail: require('../../../assets/images/apartment.jpeg') , title: "Apartment Cleaning" , id:1},
  { thumbnail: require('../../../assets/images/office.jpg'),title: "Office Cleaning" , id:2 },
  { thumbnail: require('../../../assets/images/move.jpg'), title: "Move in" , id:3 },
  { thumbnail: require('../../../assets/images/images.jpeg'),title: "Laundary Services" , id:4 },
  
];
 
export default class Home extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });
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
renderRecipes = ({ item }) => (
  <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress = {() => this.pick(item.id)}>
    <View style={styles.container}>
      <Image style={styles.photo} source={item.thumbnail } />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  </TouchableHighlight>
);
  render() {

    return (
        
        
      
      <View style = {{backgroundColor: '#F2F4F6'}}>
        <FlatList
          vertical
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.id}`}
        />
      </View>
     
      
    );
  }
}
