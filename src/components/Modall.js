import React,{Component} from 'react';
import {View, Text, StyleSheet,Modal, Button} from 'react-native';


// slider barra para selecioanr valores arrastando


export default class Modall extends Component{
    constructor(props){
        super(props);
        this.state={
            modalVisible:false
        }
        this.abrir= this.abrir.bind(this);
        this.fechar= this.fechar.bind(this);
    }

   abrir(){
   let s= this.state;
   s.modalVisible=true;
   this.setState(s);
   }

   fechar(){
       let s= this.state;
       s.modalVisible=false;
       this.setState(s)
   }

  render(){

    return(
      <View style={{flex:1}}>
        
         <Text> modal </Text>
         {/* animationType="slide none fade" */}

         <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          >
               <View >
                   <Text> My modal</Text>
                   <Button  title="Fechar"
                   onPress={this.fechar}/>
               </View>

               <Button title="abrir"
                onPress={this.abrir} />
         </Modal>
      </View>
    );
  }
}

const styles= StyleSheet.create({


});