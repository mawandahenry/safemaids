/* eslint-disable prettier/prettier */
import React from 'react'
import {Dimensions} from 'react-native'
import {createStackNavigator, createDrawerNavigator,createAppContainer} from 'react-navigation';
import * as Screens from './src/screens';
const {width} = Dimensions.get('window')
import * as Headers from './src/components'
import DrawerContainer from './src/components/DrawerContainer/DrawerContainer';

const HomeRoute = createStackNavigator({
    Home: {
        screen: Screens.Home,
        navigationOptions: () => ({
            title: "Home",
        })
    },
    Subcategory: {
        screen: Screens.SubCat,
        navigationOptions: () => ({
            title: "Subcategories"
        })
    },
    Selection: {
        screen: Screens.Selection,
        navigationOptions: () => ({
            title: "Selection"
        })
    },
    Map: {
        screen: Screens.Map,
        navigationOptions: () => ({
            title: "Choose Location"
        })
    },
    Cart: {
        screen: Screens.Cart,
        navigationOptions: () => ({
            title: "Laggage Cart"
        })
    }
})
 const profile = createStackNavigator({
     prof: {
         screen: Screens.Profile,
         navigationOptions: ({navigation}) => ({
            header: <Headers.MenuButtonHeader title="Profile"  onMenuPress={() => navigation.openDrawer()} />,
         })
     }
 })
 const about = createStackNavigator({
    prof: {
        screen: Screens.About,
        navigationOptions: ({navigation}) => ({
           header: <Headers.MenuButtonHeader title="About"  onMenuPress={() => navigation.openDrawer()} />,
        })
    }
})
const dashboard = createDrawerNavigator({
    User: HomeRoute,
    Profile: profile,
    About: about
},{
    drawerPosition: 'left',
    initialRouteName: 'User',
    contentComponent: DrawerContainer,
    drawerBackgroundColor: 'white',
  drawerWidth: width * 0.6,
  overlayColor: 'rgba(0, 0, 0, 0.6)',
  contentOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#000',
    activeBackgroundColor: 'transparent',
    itemStyle: {
      width: width * 0.75,
      backgroundColor: 'transparent',
    }
  }}
  )

export default AppNav = () => {
    return createAppContainer(dashboard);
}