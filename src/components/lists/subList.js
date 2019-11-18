/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import {
    View,
    TouchableWithoutFeedback,
    Text,
    StyleSheet
} from "react-native";
import { Icon } from "native-base";
import LinearGradient from 'react-native-linear-gradient';

const OptList = (props) => {
 return(
    <LinearGradient colors={['#f9faf2', '#dcf7c8', '#c3f28a']} style={styles.linearGradient}>
    {props.data.map((item) => {
        return(
            <TouchableWithoutFeedback
                onPress={() => props.onItemPressed(item.id, item.title)}>
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", paddingVertical: 10, paddingHorizontal: 10}}>
                <View style={{flex: 0.9, alignSelf: "flex-start", justifyContent: "center"}}>
                    <Text style={{textAlign: "left", marginLeft: 10,fontSize: 16}}>{item.title}</Text>
                </View>
                <View style={{flex: 0.1, alignItems: "center", justifyContent:"center"}}>
                    <Icon name='arrowright' type='AntDesign' size={20} color= "#c3f28a"/>
                </View>
            </View>
    </TouchableWithoutFeedback>
        )
    })
    }
    </LinearGradient>
 )  
}
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
})
export default OptList;
