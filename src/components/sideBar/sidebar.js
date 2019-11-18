import React, { Component } from 'react';
import {View, StyleSheet, Text} from "react-native";

const SideBar =(props) => {
    return(
        <View>
            <Text>Home</Text>
            <Text>Services</Text>
            <Text>About</Text>
            <Text>Profile</Text>
            <Text>Logout</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menu: {
        padding: 10,
        fontSize: 16,
        fontFamily: "PlayfairDisplay-regular"
    }
})
export default SideBar;