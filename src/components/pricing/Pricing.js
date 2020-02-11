/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';
const {width, height} = Dimensions.get('window');
import {Icon} from 'native-base';
import * as Constants from '../../utils/constants';
import normalize from 'react-native-normalize';
import moneyUgx from '../../utils/methods'
class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      count: 0,
      data: Constants.tops,
      qty: 1,
    };
  }
  changeLeft =() => {
    this.setState(previous => {
      return {
      count: previous.count - 1,
    };
  });

  }
  changeRight =() => {
    this.setState(previous => {
      return {
      count: previous.count + 1,
    };
  });

  }

  render() {

    return (
        <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1, marginTop: normalize(30)}}>
        <View style = {{flex: 1}}>
        <Image source = {this.props.item.image} style = {styles.image} resizeMode = "contain"/>
        </View>
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {{textAlign: 'center', fontSize: 20}}>{this.props.item.title}</Text>
        <Text>{moneyUgx(this.props.item.price * this.state.qty)}</Text>
        </View>
        <View style = {{flex: 1}}>
          <View style = {{justifyContent: 'center', alignItems: 'center'}}>
            <Icon
            name = "caretup"
            type = "AntDesign"
            style = {{color: 'green'}}
            onPress = {() => this.setState(prevState =>{return {qty: prevState.qty + 1};})}
            />
            
            <Text style = {{textAlign: 'center'}}>{`Qty: ${this.state.qty}`}</Text>
            <Icon
            name = "caretdown"
            type = "AntDesign"
            style = {{color: 'green'}}
            onPress = {() => this.setState(prevState =>{return {qty:  prevState.qty == 1 ? prevState.qty - 0 : prevState.qty - 1};})}
             />
          </View>
        
        </View>
        <View style = {{flex: 0.5}}>
        <Icon type = "FontAwesome" name = "cart-plus" style = {{fontSize: normalize(30), alignSelf: 'center', color: 'green'}}/>
        </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    paddingTop: '10%',

  },
});
export default Pricing;

