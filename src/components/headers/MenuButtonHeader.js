import React from 'react';
import {Platform, StatusBar, TouchableWithoutFeedback} from 'react-native';
import {Header, Left, Body, Right, Title, View} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';
function MenuButtonHeader(props) {
  return (
    <Header style={{backgroundColor: 'white'}}>
      <StatusBar hidden={true} />
      <View
        style={{
          marginLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Feather
          name={props.closeIcon === true ? 'x' : 'menu'}
          style={styles.icon}
          onPress={() => props.onMenuPress()}
        />
      </View>
      <Body style={{flex: 3}}>
        {!!props.title && <Title style={styles.title}>{props.title}</Title>}
      </Body>
      <Right />
    </Header>
  );
}

const styles = {
  icon: {
    color: '#000',
    fontSize: 25,
  },
  title: {
    color: '#000',
    fontFamily: 'LatoRegular',
    fontSize: 20,
    ...Platform.select({
      android: {marginLeft: 15},
    }),
  },
};

export default MenuButtonHeader;
