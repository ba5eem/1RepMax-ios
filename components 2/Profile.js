import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Switch } from 'react-native';

class Profile extends Component{
  constructor(){
    super();

    this.state = {
      textVal: "",
      switchVal: false
    }
  }


  onChangeText(e){
    this.setState({textVal: e})
  }

  onSubmit(){
    console.log('input sumitted');
  }

  onSwitchChange(e){
    this.setState({switchVal: e})
  }


  render(){
    return(
      <View>

        <TextInput
          placeholder="enter text"
          onChangeText={(e)=>this.onChangeText(e)}
          onSubmitEditing={this.onSubmit}
          value={this.state.textVal}/>
        <Text>{this.state.textVal}</Text>
        <Switch
          value={this.state.switchVal}
          onValueChange={(e)=>this.onSwitchChange(e)}/>
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
export default Profile;
