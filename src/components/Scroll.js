import React,{Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

//scrowpage <ScrollView pagingEnabled={true}> scrow por paginação

//

export default class Scroll extends Component{
  render(){

    return(
      <View >
        <View  style={styles.header} >
        <Text>cabecalho da aplicação</Text>
        </View>

         <ScrollView >
            <Text style={{ flex:1, height:200, backgroundColor:'red'}} >teste </Text>
            <Text style={{ flex:1, height:200, backgroundColor:'black'}} >teste </Text>
            <Text style={{ flex:1, height:200, backgroundColor:'yellow'}} >teste </Text>
            <Text style={{ flex:1, height:200, backgroundColor:'red'}} >teste </Text>
            <Text style={{ flex:1, height:200, backgroundColor:'blue'}} >teste </Text>
            <Text style={{ flex:1, height:200, backgroundColor:'green'}} >teste </Text>
         </ScrollView>
         
         {/* <View  style={styles.header} >
           <Text>Rodapé</Text>
        </View>
          */}
      </View>
     
    );
  }
}

const styles= StyleSheet.create({
 header:{
  height:80,
  backgroundColor:'green'
 }

});