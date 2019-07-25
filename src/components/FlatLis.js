import React,{Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


//data possui um json com  os dados de cada objeto
//renderItem  renderiza os itemns

//flatList não carrega os dados não visiveis na memória
export default class FlatLis extends Component{
   
    constructor(props){
        super(props);
        this.state={
            flatData:[
                 {key:"1", name:'greison', idade:22},
                 {key:"2",name:'teste 2', idade:23},
                 {key:"3",name:'teste 3', idade:24},
                 {key:"4",name:'teste 4', idade:25},
                 {key:"5",name:'teste 4', idade:25}

            ]
        };
    }

    flatRender(item){
      return(
          <View > 
          <Text style={{fontSize:30, borderColor: 'black', borderWidth: 1 }}> {item.name}, </Text>
                    <Text style={{fontSize:10, borderColor: 'black', borderWidth: 1 }}> {item.idade} </Text>

          </View>
     );
    }

  render(){

    return(
      <View>
         <FlatList
          data={this.state.flatData}
          renderItem={({item})=>this.flatRender(item)}
        //   keyExtractor={ (item, key) => key.toString() }
          
         />

      </View>
    );
  }
}

const styles= StyleSheet.create({


});