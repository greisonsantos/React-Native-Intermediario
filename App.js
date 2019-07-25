import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Scroll from './src/components/Scroll';
import FlatLis from './src/components/FlatLis';
import SectionLis from './src/components/SectionLis';

import Picker from './src/components/Picker';
import Swit from './src/components/Switch';
import Slide from './src/components/Slide';
import Modall from './src/components/Modall';
import StatusBa from './src/components/StatusBa';


export default class App extends Component{
  render(){

    return(
      <View style={{flex:1}}>
          {/* <Scroll/> */}
          {/* <FlatLis /> */}
          {/* <SectionLis /> */}
          {/* <Picker /> */}
          {/* <Swit /> */}
          {/* <Slide /> */}
          {/* < Modall /> */}
          <StatusBa />
      </View>
    );
  }
}

const styles= StyleSheet.create({


});