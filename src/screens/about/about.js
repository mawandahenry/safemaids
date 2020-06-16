/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import normalize from 'react-native-normalize';
import {Button} from 'react-native-elements';
export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
          }}>
          <Image
            source={require('../../../assets/images/app2.png')}
            resizeMode="contain"
            style={{
              width: normalize(150),
              height: normalize(150),
              alignSelf: 'center',
            }}
          />
        </View>
        <View
          style={{
            flex: 3,
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '400'}}>
            About US
          </Text>
          <View style={{flex: 1}}>
            <Image
              source={require('../../../assets/images/laundary.jpg')}
              resizeMode="contain"
              style={{width: '100%', height: normalize(150)}}
            />
          </View>
          <View
            style={{
              flex: 1.7,
              marginHorizontal: normalize(20),
              marginTop: normalize(25),
            }}>
            <Text style={{textAlign: 'center'}}>
              We are the leading Laundary providers in the whole country with so
              many branches spanning from all angles and Directions from the
              city. Our services are so so nice this am telling you.
            </Text>
            <Text style={{textAlign: 'center'}}>
              Our services include Washing, office cleaning and we are located
              in five different locations offering a wide variety of all your
              needs
            </Text>
            <Text style={{textAlign: 'center'}}>
              For more Information, Please kindly visit our Website
            </Text>
          </View>
          <View style={{flex: 0.3, bottom: 0}}>
            <Button
              title="Visit our Site"
              buttonStyle={{backgroundColor: 'green'}}
            />
          </View>
        </View>
      </View>
    );
  }
}
