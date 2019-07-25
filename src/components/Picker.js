import React,{Component} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

//Picker   semelhante ao select

export default class Piker extends Component{
    constructor(props){
        super(props);
            this.state={
                servico:'0',  //armazena as chaves 1,2,3,4,5
                servicos:[
                    {nome:'alinhamento', valor:45},
                    {nome:'Balanceamento', valor:10},
                    {nome:'Geral', valor:50},
                    {nome:'Rodizio', valor:15},
                    {nome:'Varredura', valor:15}
                ]

            }
    }
  render(){
      let servicosItems= this.state.servicos.map((valor, key)=>{
          return <Picker.Item key ={key} value={valor} label={valor.nome} />
      });

    return(
      <View style={{flex:1 }}>
          <Text style={styles.logo}> Auto Peças</Text>
          <Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex)=>this.setState({servico:itemValue})}> 
             {servicosItems}
          </Picker>
          <Text style={styles.valor}> R$ {this.state.servicos[this.state.servico].valor.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({

 logo:{
     fontSize:30,
     textAlign:'center',
     marginBottom:30,
 },
 valor:{
     fontSize:25,
    textAlign:'center',
    marginTop:20,
 }
});


//  PICKER ESTATICO
//Picker   semelhante ao select

// export default class Piker extends Component{
//     constructor(props){
//         super(props);
//             this.state={
//                 servico:'0',
//                 servicos:[
//                     {nome:'alinhamento', valor:30},
//                     {nome:'Balanceamento', valor:10},
//                     {nome:'Geral', valor:50},
//                     {nome:'Rodizio', valor:15}
//                 ]

//             }
//     }
//   render(){
     
//     return(
//       <View style={{flex:1 }}>
//           <Text> picker</Text>
//           <Picker selectedValue={0} onValueChange={({itemValue, itemIndex})=>this.setState({servico:itemValue})}> 
//              <Picker.Item  key={0} value="0" label="Alinhamento" />
//              <Picker.Item  key={0} value="0" label="Balanceamento" />
//              <Picker.Item  key={0} value="0" label="Balanceamento" />
//              <Picker.Item  key={0} value="0" label="Balanceamento" />
//           </Picker>
//       </View>
//     );
//   }
// }

