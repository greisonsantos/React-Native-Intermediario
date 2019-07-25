import React,{Component} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';


export default class Swit extends Component{
    constructor(props){
        super(props);
        this.state={
            valor:false
        }
    }
  render(){

    return(
      <View style={{flex:1}}>
       <Text> switch</Text>
  
       <Switch  
        value={this.state.valor}
        onValueChange={(v)=>this.setState({valor:v})}
        thumbColor="#0000FF"
        onTintColor="#FF0000"
        />
       
       <Text> {this.state.valor.toString()}</Text>
       <Text> {(this.state.valor)?"Selecioando":"Não Selecionado"}</Text>

      </View>
    );
  }
}

const styles= StyleSheet.create({


});