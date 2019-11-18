/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import * as Screens from './src/screens';

const _welcome = createStackNavigator({
    Welcome: {
        screen: Screens.Welcome,
        navigationOptions: ({navigation}) => ({
            header: null
        })
},
Signup: {
    screen: Screens.Signup,
    navigationOptions: ({navigation}) => ({
        header: null
    })
},
Home: {
    screen: Screens.Home,
    navigationOptions: ({navigation}) => ({
        title: "Home"
    })
},
Subcategory: {
    screen: Screens.SubCat,
    navigationOptions: ({navigation}) => ({
        title: "Subcategories"
    })
},
Selection: {
    screen: Screens.Selection,
    navigationOptions: ({navigation}) => ({
        title: "Selection"
    })
},
Map: {
    screen: Screens.Map,
    navigationOptions: ({navigation}) => ({
        title: "Location"
    })
},
Cart: {
    screen: Screens.Cart,
    navigationOptions: ({navigation}) => ({
        title: "Laggage Cart"
    })
}

});

export default AppNav = () => {
    return createAppContainer(_welcome);
}