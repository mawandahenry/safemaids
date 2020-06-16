/* eslint-disable react/prefer-stateless-function */
/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="HOME"
            source={require('../../../assets/images/home.png')}
            onPress={() => {
              navigation.navigate('User');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Profile"
            source={require('../../../assets/images/account.png')}
            onPress={() => {
              navigation.navigate('Profile');
              navigation.closeDrawer();
            }}
          />

          <MenuButton
            title="About"
            source={require('../../../assets/images/about.png')}
            onPress={() => {
              navigation.navigate('About');
              navigation.closeDrawer();
            }}
          />
           
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
