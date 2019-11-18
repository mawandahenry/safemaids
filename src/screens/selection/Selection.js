/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, Text, View, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import * as Comps from '../../components';
import * as constants from '../../utils/constants';
import Popover from 'react-native-popover-view'
import { CheckBox, Button  } from 'react-native-elements';
const {width, height} = Dimensions.get("window");


class Selection extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: constants.tops,
          visible: false,
          checked: "first",
          urgent: false,
          normal: true,
          indoor: true,
          outdoor:false
        };
    }

    renderItem = ({ item, index }) => (
      <Image style={styles.image} source={item.image} />
    )
     _show =() =>this.setState({visible: true})
     _hide =() =>this.setState({visible: false})
    handleNav =() =>{
      this._hide();
      this.props.navigation.navigate("Map")
    }

  render() {
    const { urgent, indoor, normal, outdoor } = this.state;
    return (
      <View style={{flex:1}}>
      <FlatList

        data = {this.state.data}
        renderItem = {(item) => ( <Comps.Pricing  {...item} />)}
        keyExtractor = {item => item.id}
        style = {{flex: 2, width, height}}
       
       />
       <Popover isVisible={this.state.visible}  popoverStyle = {{width: width*0.98, height: height*0.8}}>
        
        <View style = {{borderBottomWidth: 0.2}}>
          <Text style = {{textAlign: 'center', fontSize: 20, fontWeight: '400', paddingTop: 12}}>Laundary Options</Text>
        </View>
        <View>
        <CheckBox
                checkedColor = "#c3f28a"
                size = {30}
                title="Urgent"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                containerStyle = {{borderWidth: 0, backgroundColor: 'white'}}
                checked={urgent}
                onPress = {() =>this.setState({normal: !this.state.normal, urgent: !this.state.urgent})}
                />
        <CheckBox
                checkedColor = "#c3f28a"
                size = {30}
                title="Ordinary"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                containerStyle = {{borderWidth: 0, backgroundColor: 'white'}}
                checked={normal}
                onPress = {() =>this.setState({normal: !this.state.normal, urgent: !this.state.urgent})}
                />
        </View>

        <View>

          <View style = {{borderBottomWidth: 0.2, marginTop: 30}}>
           
          </View>
          <CheckBox
                checkedColor = "#c3f28a"
                size = {30}
                title="Indoor"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                containerStyle = {{borderWidth: 0, backgroundColor: 'white'}}
                checked={indoor}
                onPress = {() =>this.setState({indoor: !this.state.indoor, outdoor: !this.state.outdoor})}
                />
        <CheckBox
                checkedColor = "#c3f28a"
                size = {30}
                title="Outdoor"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                containerStyle = {{borderWidth: 0, backgroundColor: 'white'}}
                checked={outdoor}
                onPress = {() =>this.setState({indoor: !this.state.indoor, outdoor: !this.state.outdoor})}
                />   
        </View>
        <View style = {{marginHorizontal: 15}}>
          <Text style = {{fontWeight: '600', fontSize: 16}}>Note</Text>
          <Text>Urgent refers to quick operations that surpass our daily working routins. usually laggage is worked on at that moment</Text>
          <Text>In Ordinary, we maintain the daily Routine flow whereby laggage is processed for the usual interval</Text>

        </View>
        <View style = {{marginHorizontal: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-between', top: 20}}>
          <Button icon={{name: "arrow-back",size: 15,color: "white"}}onPress = {this._hide} buttonStyle = {{backgroundColor: 'red'}} title = "Back"/>
          <Button icon={{name: "arrow-forward", size: 15, color: "white" }} buttonStyle = {{backgroundColor: "#c3f28a", color: 'white'}}title = "Continue" onPress ={this.handleNav}/>
        </View>
        
      </Popover>
          <TouchableOpacity style = {{flex:0.1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',backgroundColor: '#d3f58e'}} onPress = {this._show}>
            <Text>
              Total
            </Text>
            <Text>
              UGX 100,000
            </Text>
          </TouchableOpacity>
       </View>
       
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  gridItem: {
    padding: 5,
      
  }
});
export default Selection;
