import React,{Component} from 'react';
import {View, Text, StyleSheet,Slider} from 'react-native';


// slider barra para selecioanr valores arrastando


export default class Slide extends Component{
    constructor(props){
        super(props);
        this.state={
           valor:50
        }
    }

  render(){

    return(
      <View style={{flex:1}}>
         <Slider
           value={this.state.valor}
           minimumValue={0}
           maximumValue={100}
           onValueChange={(v)=>this.setState({valor:v})}
           minimumTrackTintColor="#FF0000"
           maximumTrackTintColor="#0000FF"
         />
         <Text> {this.state.valor.toFixed(0)} %</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({


});