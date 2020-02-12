/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import {Container, Header, Content, Accordion, Icon} from 'native-base';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header} />
        <View style={styles.image}>
          <Image
            source={require('../../../assets/images/place.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: normalize(200),
              height: normalize(100),
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.info}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="person-outline" type="MaterialIcons" />
            <Text>Mawanda Henry</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="mail" type="Feather" />
            <Text>mawanda111@gmail.com</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="smartphone" type="Feather" />
            <Text>+256 752186907</Text>
          </View>
        </View>
        <View style={styles.body}>
          <TouchableOpacity style={{flex: 1}}>
            <View style={styles.inside}>
              <Text>Call Us</Text>
              <Icon name="phone" type="AntDesign" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}}>
            <View style={styles.inside}>
              <Text>Report Problem</Text>
              <Icon name="mail" type="Feather" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}}>
            <View style={styles.inside}>
              <Text>Log Out</Text>
              <Icon name="power" type="Feather" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: '#00ff24',
  },
  body: {
    flex: 3,
    backgroundColor: '#f2f2f4',
    borderTopLeftRadius: normalize(40),
    borderTopRightRadius: normalize(40),
  },
  info: {
    flex: 2,
    marginTop: normalize(60),
    backgroundColor: 'white',
    alignItems: 'center',
    padding: normalize(5),
  },
  image: {
    flex: 1,
    backgroundColor: 'blue',
    position: 'absolute',
    top: normalize(90),
    left: normalize(80),
    padding: normalize(10),
    borderRadius: normalize(10),
  },
  inside: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
