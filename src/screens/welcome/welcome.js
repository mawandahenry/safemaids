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
  StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Title, Subheading, TextInput, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get("window");
import AppIntroSlider from 'react-native-app-intro-slider';

 
class Welcome extends Component{
  constructor(props){
    super(props)
    this.state = {
      text: "",
      password: "",
      showRealApp: false
    }
  }
    
    render(){
        return(
  <Fragment>
   <StatusBar hidden = {true} />
   <LinearGradient colors={['#f9faf2', '#dcf7c8', '#c3f28a']} style={styles.linearGradient}>
     <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <View style = {{flex: 0.5, marginTop: height*0.1}}>
     <Title style = {styles.intro}>Safe Maids</Title>
     <Subheading style = {styles.intro2}>Bringing all the services together to you</Subheading>
     </View>
     <View style = {{flex: 0.5}}>

     </View>
     <View style = {{flex: 2}}>
<Text style = {{fontSize: 20, textAlign: 'center', marginBottom: 10, fontFamily: "CrimsonText-RegularItalic"}}>Login</Text>
<View style = {{flex: 1}}>
        <TextInput
        label='username'
        underlineColor = "white"
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        style = {{width: width*0.9, backgroundColor: "#dcf7c8"}}
      />
      <TextInput
        label='password'
        underlineColor = "white"
        value={this.state.text}
        onChangeText={password => this.setState({ password })}
        style = {{width: width*0.9, marginTop: 10, backgroundColor: "#dcf7c8"}}
      />
       <Button  mode="contained" onPress={() => this.props.navigation.navigate("Home")} style = {{marginTop: 10}} color ="#9ed665">
   Login
  </Button>
     
  
  <View style = {{flexDirection: 'row'}}>
  <Text style = {{marginTop: 10}}>
    Don't have an account?
  </Text>
  <TouchableOpacity onPress = {() => this.props.navigation.navigate("Signup")}>
  <Text style = {{marginTop: 10, marginLeft: width*0.05, color: "#71bbf0"}}>
   Create one Now!!
  </Text>
  </TouchableOpacity>
  </View>
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
export default Welcome;