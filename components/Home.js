import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

const link = {uri: 'https://facebook.github.io/react/logo-og.png'}
const size = {width: 400, height: 400};

class Home extends Component{


  onPress(){
    console.log("Ola Baseem")
  }


  render(){
    return(
      <View>
        <View style={container}>
          <Image source={link}
       style={size} />
            
        </View>
      </View>

      )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%"
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

export default Home;
