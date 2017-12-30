import React, { Component } from 'react';
import { Text, View, StyleSheet, NavigatorIOS } from 'react-native';
import Home from './Home';
import Main from './Main.js';
import Profile from './Profile.js';

class Nav extends Component{



  render(){
    return(
      <View>
        <Text>OLA</Text>
      </View>

      )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100
  },
  vA:{
    flex: 1,
    backgroundColor: "salmon",
    padding: 10
  },
  vB:{
    flex: 1,
    backgroundColor: "cornflowerblue",
    padding: 10
  },
  vC:{
    flex: 1,
    backgroundColor: "lightgreen",
    padding: 10
  }

});

const { container, vA, vB, vC } = styles;

export default Nav;
