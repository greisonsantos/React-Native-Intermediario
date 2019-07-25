import React,{Component} from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';


//section lista os dados em forma de seção separado por titulo por exempo
export default class SectionLis extends Component{
   
    constructor(props){
        super(props);
        this.state={
            listData:[
                {title:'B', data:[ 
                 {key:"1", name:'bruno', idade:22}
                ]},
                
                {title:'C', data:[ 
                    {key:"2", name:'Carlos', idade:22},
                    {key:"3", name:'Carlos', idade:22},
                    {key:"4", name:'Carlos', idade:22}
                   ]},
                {title:'D', data:[ 
                    {key:"1", name:'Danilo', idade:22}
                   ]}
                ]

        };
    }

    listRender(item){
      return(
          <View > 
          <Text style={{fontSize:30, borderColor: 'black', borderWidth: 1 }}> {item.name}, </Text>
                    <Text style={{fontSize:10, borderColor: 'black', borderWidth: 1 }}> {item.idade} </Text>

          </View>
     );
    }

    ListSectionRender(section){
       <Text> Letra: {section.title}</Text>
    }

  render(){

    return(
      <View>
          <Text> section</Text>
         <SectionLis
          sections={this.state.listData}
          renderItem={({item})=>this.listRender(item)}
          renderSectionHeader={({section})=>this.ListSectionRender(section)}

          
         />

      </View>
    );
  }
}

const styles= StyleSheet.create({


});