/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Alert,
  StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Title, Subheading, TextInput, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get("window");
import AppIntroSlider from 'react-native-app-intro-slider';

 
class Signup extends Component{
  constructor(props){
    super(props)
    this.state = {
      text: "",
      password: "",
      showRealApp: false
    }
  }
    press =() => {
      alert('wasappa');
    }
    render(){
        return(
  <Fragment>
   <StatusBar hidden = {true} />
   <LinearGradient colors={['#f9faf2', '#dcf7c8', '#c3f28a']} style={styles.linearGradient}>
     <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <View style = {{flex: 0.5, marginTop: height*0.1}}>
     <Title style = {styles.intro}>Create Account</Title>
     
     </View>
     <View style = {{flex: 0.5}}>

     </View>
     <View style = {{flex: 3}}>

<View style = {{flex: 1}}>
        <TextInput
        label='username'
        underlineColor = "white"
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        style = {{width: width*0.9, backgroundColor: "#dcf7c8"}}
      />
      
      <TextInput
        label='contact'
        underlineColor = "white"
        value={this.state.text}
        onChangeText={password => this.setState({ password })}
        style = {{width: width*0.9, marginTop: 10, backgroundColor: "#dcf7c8"}}
      />
      <TextInput
        label='email'
        underlineColor = "white"
        value={this.state.text}
        onChangeText={password => this.setState({ password })}
        style = {{width: width*0.9, marginTop: 10, backgroundColor: "#dcf7c8"}}
      />
      <TextInput
        label='password'
        underlineColor = "white"
        value={this.state.text}
        onChangeText={password => this.setState({ password })}
        style = {{width: width*0.9, marginTop: 10, backgroundColor: "#dcf7c8"}}
      />
      <TextInput
        label='confirm password'
        underlineColor = "white"
        value={this.state.text}
        onChangeText={password => this.setState({ password })}
        style = {{width: width*0.9, marginTop: 10, backgroundColor: "#dcf7c8"}}
      />
      
  <Button icon="add-a-photo" mode="contained"  style = {{marginTop: 10}} color = "#a9d665">
    Create Account
  </Button>
  
  </View>


     </View>
      
     </View>
     </LinearGradient> 
    </Fragment>
        )
    }
}
const styles = StyleSheet.create({
    body: {
      backgroundColor: Colors.white,
    },
    intro: {
      fontSize: 30,
      fontFamily: "CrimsonText-RegularItalic",
      color: '#53f037',
      textAlign:'center'
    },
    intro2: {
      fontSize: 15,
      fontFamily: "CrimsonText-RegularItalic",
      color: '#53f037',
      textAlign:'center'
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
  });
export default Signup;