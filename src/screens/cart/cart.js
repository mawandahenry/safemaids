/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View } from 'native-base';
import { Dimensions, ScrollView, Text } from 'react-native';
import {Button} from 'react-native-elements'
import CartItem from '../../components/lists/CartItem'
import * as Constants from '../../utils/constants'
const {width, height} = Dimensions.get('window');

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 2,
            total: 0,
            items: 0,
            tapped: false,
            visible: true
        }
        this._icon = React.createRef();
    }

    componentWillMount(){
    
    }

  

    // deleteCartItem(id, monix){

    //     this.props.remove_from_cart(id)
    //     const i = numeral(this.state.total)._value-monix
    //     this.setState({ total: this.formatMoney(i)})
    //     this.setState(prev => {return{ items: prev.items-1}})

    // }

    

    renderHeader(){
        return(
            <View style={{margin: 20}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{fontSize: 15, color: "#c3f28a",fontFamily:"LatoRegular"}}>Total:</Text>
                    <Text style={{marginHorizontal: 5, fontSize: 15,fontFamily:"LatoRegular"}}>UGX 12,0000</Text>
                    <View style={{flexDirection: "row", marginLeft: "auto", justifyContent: "flex-end", alignItems: "center"}}>
                        <Text style={{fontSize: 15, color: "#c3f28a",fontFamily:"LatoRegular"}}>Items:</Text>
                        <Text style={{marginLeft: 5, fontSize: 15, marginRight: 10,fontFamily: "LatoRegular"}}>4</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderItems(){
        return(
            Constants.tops.map((list, index) => (
                <CartItem
                    key={index}
                    unique = {list.id}
                    image={list.image}
                    quantity={list.price}
                    price={list.price}
                    title={list.title}
                    

                />
            ))
        );
    }

    

    render(){
        return(
            
            <View style={styles.container}>
            <View style={{flex: 1, zIndex: 0}}>
                {this.renderHeader()}
                <ScrollView style = {{flex: 1}}>
                {this.renderItems()}
                </ScrollView>
                <View style={{marginHorizontal: 20, flex: 0.1}}>
                        <Button title = "Proceed to Pay" buttonStyle = {{backgroundColor: '#c3f28a'}} />
                        
                    </View>
                </View>
               
    </View>
        );
    }
}
const styles = {
    
    headerLayoutStyle: {
      width, 
      height: 60, 
      backgroundColor: '#edebe6', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'row'
    },
    commonTextStyle: {
      color: 'white', 
      fontSize: 18,
    },
    slidingPanelLayoutStyle: {
      flex: 1,
      width, 
      height,
      justifyContent: 'center', 
      alignItems: 'center',

     
    },
    container: {
      flex: 1,
    }
}

export default Cart;

