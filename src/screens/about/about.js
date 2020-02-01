import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>About Screen</Text>
      </View>
    );
  }
}
