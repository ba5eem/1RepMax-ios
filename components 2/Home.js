import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,TouchableOpacity } from 'react-native';

class Home extends Component{


  onPress(){
    console.log("Ola Baseem")
  }


  render(){
    return(
      <View>
        <View style={container}>

          <TouchableHighlight 
            style={vA} 
            underlayColor="blue"
            onPress={this.onPress}>
            <View >
              <Text>View A</Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity
            style={vB}
            onPress={this.onPress}>
            <View>
              <Text>View B</Text>
            </View>
          </TouchableOpacity>

            <View style={vC}>
              <Text>View C</Text>
            </View> 
            
        </View>
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

export default Home;
