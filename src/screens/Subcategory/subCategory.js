/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import * as Lists from '../../components/lists';
import * as constants from '../../utils/constants';



class SubCat extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            id: ""
        }
    }
        componentWillMount(){
            const id = this.props.navigation.state.params.id;
            this.setState({id,
                data: constants.laundry
            });
        }
        fireStone =(id) => {
           this.props.navigation.navigate('Selection');
        }

    
    render(){
        return (
            
                <ScrollView>
               <Lists.OptList data = {this.state.data} onItemPressed = {(id,title) => this.fireStone(id,title)}/>
                </ScrollView>
              
            
        )
    }

}
  
export default SubCat;
