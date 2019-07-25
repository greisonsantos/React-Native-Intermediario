import React,{Component} from 'react';
import {View, Text, StyleSheet, Button,StatusBar} from 'react-native';
import { hidden } from 'ansi-colors';



export default class StatusBa extends Component{

    constructor(props){
        super(props);
        this.state={
            StatusStyle:'dark-content',
            bgColor:'#FFFFFF'
           
        }
        this.alternar=this.alternar.bind(this);
        
    }

    alternar(){
     let s= this.state;

      if(s.StatusStyle=='dark-content'){
          s.StatusStyle='ligt-content';
          s.bgColor='#000000';
      }else{
        s.StatusStyle='dark-content';
        s.bgColor='#FFFFFF';
      } 
      
      this.setState(s);
    }



    //  barStyle={"default | ligt-content | dark-content"}
  render(){

    return(
      <View style={[styles.body,{backgroundColor:this.state.bgColor}]}>
         <StatusBar
          barStyle={this.state.StatusStyle}

        
          />

          <Button
            title="alternar"
            onPress={this.alternar}
           />

      </View>
    );
  }
}

const styles= StyleSheet.create({
   
    body:{
        flex:1,
        alignItems:'center'
    }, 
    StatusStyle:{

    }
});