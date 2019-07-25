import React,{Component} from 'react';
import {View, Text, StyleSheet, AsyncStorage, TextInput} from 'react-native';




export default class Storage extends Component{
    constructor(props){
        super(props);
        this.state={
            nome:''
        };

        AsyncStorage.getItem("nome").then((value)=>{
            this.setState({nome:value});
        });
        
        this.setNome= this.setNome.bind(this);
    }


    setNome(nome){
     let s = this.state;
     s.nome= nome;
     this.setState(s);

     AsyncStorage.setItem("nome", nome);

    }
  render(){

    return(
      <View style={{flex:1}}>
         <Text> Async storage</Text>
          
          <TextInput 
           style={styles.input}
           value={this.state.nome}
           onChangeText={(nome)=> this.setNome(nome)}
          />
      </View>
    );
  }
}

const styles= StyleSheet.create({

input:{
    height:40,
    borderWidth:1,
    borderColor:'black',
    fontSize:15,

}
});