/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { View } from 'native-base';
import { Image, Icon } from 'react-native-elements';


class CartItem extends Component{
    constructor(props){
        super(props);
       
    }

    


    renderProductInfo(){
        return(
            <View style={{ marginHorizontal: 10}}>
            <Text style={{fontSize: 15, fontWeight: "400", marginRight: 20, color: "#c3f28a"}}>{this.props.title}</Text>
            <Text style={{fontSize: 15, fontWeight: "400", marginRight: 20}}>{this.props.quantity}</Text>
            <Text style={{fontSize: 15, fontWeight: "400", marginRight: 20, marginTop: 5}}>{this.props.price}</Text>
            </View>
        );
    }

    render(){
        
        return(
            <View style={{ flexDirection: "row", marginVertical: 10, marginHorizontal: 20, alignItems: "center", backgroundColor: "white", padding: 10, elevation: 10}}>
            <View style={{flex: 0.25, alignItems: "center"}}><Image source={this.props.image} style={{ width: 70, height: 70}}/></View>
            <View style={{flex: 0.65, alignItems: "center"}}>{this.renderProductInfo()}</View>
            <View style={{flex: 0.1, alignItems: "center", justifyContent:"center"}}><Icon  name='trash' type='feather' size={30} color="red" /></View>

            </View>
        );
    }
}

export default CartItem;
