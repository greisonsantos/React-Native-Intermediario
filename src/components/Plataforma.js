import React,{Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';


export default class Plataform extends Component{

    //salvando a plataforma ou versão no stado
   constructor(props){
       super(props);
       this.state={
           plataforma: Platform.OS,
       }
   }


  render(){

    return(
      <View style={{flex:1}}>
          <Text style={styles.cor}> Meu sistema é {Platform.OS}</Text>
          <Text style={styles.tamanho}> A versão é  {Platform.Version}</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({

 cor:{
     color: (Platform.OS=='ios')? '#0000FF': '#00FF00'
 },
 tamanho:Platform.select({
   ios:{
       fontSize:10,
   },
   android:{
       fontSize:50
   }   
 
 })

});