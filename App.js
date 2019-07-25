import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Scroll from './src/components/Scroll';
import FlatLis from './src/components/FlatLis';
import SectionLis from './src/components/SectionLis';

import Picker from './src/components/Picker';
import Swit from './src/components/Switch';

export default class App extends Component{
  render(){

    return(
      <View style={{flex:1}}>
          {/* <Scroll/> */}
          {/* <FlatLis /> */}
          {/* <SectionLis /> */}
          {/* <Picker /> */}

          <Swit />
      </View>
    );
  }
}

const styles= StyleSheet.create({


});