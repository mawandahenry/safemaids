/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';
const {width, height} = Dimensions.get('window');
import {Icon} from 'native-base'
import * as Constants from '../../utils/constants'
class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      count: 0,
      data: Constants.tops,
      qty: 1
    };
  }
  changeLeft =() => {
    this.setState(previous => {
      return {
      count: previous.count -1
    }
  })

  }
  changeRight =() => {
    this.setState(previous => {
      return {
      count: previous.count +1
    }
  })

  }

  render() {
    
    return (
        <Card style = {{justifyContent: "center", alignContents: "center", width, height}}>
        <View>
          <Text style = {{textAlign: 'center', fontSize: 20}}>{this.props.item.title}</Text>
          <Image source = {this.props.item.image} style = {styles.image} resizeMode = "center"/>
          <Text style = {{textAlign: 'center', marginTop: "-12%"}}>{`Qty: ${this.state.qty}`}</Text>
          <View style = {{flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
            <Icon 
            name = "caretleft" 
            type = "AntDesign" 
            style = {{color: "green"}} 
            onPress = {() => this.setState(prevState =>{return {qty:  prevState.qty == 1? prevState.qty-0: prevState.qty - 1}})}

            />
            <Text style = {{paddingLeft: 30, paddingRight: 30}}>{` UGX ${this.props.item.price*this.state.qty}`}</Text>
            <Icon 
            name = "caretright" 
            type = "AntDesign"
            style = {{color: "green"}} 
            onPress = {() => this.setState(prevState =>{return {qty: prevState.qty + 1}})}
             />
          </View>
          <Icon type = "FontAwesome" name = "cart-plus" style = {{fontSize: 80, alignSelf: 'center', color: 'green'}}/>
        </View>
        </Card>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: '70%',
    height: '70%',
    borderRadius: 10,
    alignSelf: 'center',
    paddingTop: "10%",
    
  },
})
export default Pricing;

