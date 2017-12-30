import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Switch } from 'react-native';

const link = {uri: 'http://bit.ly/2Dwlo94'}
const size = {width: 100, height: 100};

class Profile extends Component{
  constructor(){
    super();

    this.state = {
      textVal: ""
    }
  }


  render(){
    return(
      <View>
        <View style={container} >
          <Image source={link} style={size} />
          <View style={userinfo}>
            <Text style={username}>Baseem</Text>
            <Text style={username}>Age: 21</Text>
            <Text style={username}>BOX: CrossFit Kuleana</Text>
          </View>
        </View>
        <View style={midsection} ></View>
        <View style={userinfo} >
          <Text style={username}>Baseem</Text>
          <Text style={username}>Age: 21</Text>
          <Text style={username}>BOX: CrossFit Kuleana</Text> 
        </View>
        <View style={midsection} ></View>
        <View style={userinfo} >
          <Text style={username}>Baseem</Text>
          <Text style={username}>Age: 21</Text>
          <Text style={username}>BOX: CrossFit Kuleana</Text> 
        </View>
        <View style={midsection} ></View>
        <View style={userinfo} >
          <Text style={username}>Baseem</Text>
          <Text style={username}>Age: 21</Text>
          <Text style={username}>BOX: CrossFit Kuleana</Text> 
        </View>
        
      </View>

      )
  }

}

const styles = StyleSheet.create({
  container: {
    width: 350,
    flexDirection: "row",
    height: 100,
    marginTop: 10,
    marginBottom: 20
  },
  username:{
    marginLeft: 10
  },
  userinfo:{
    flex: 1,
    padding: 10
  },
  midsection:{
    backgroundColor: "grey",
    height: 10
  }

});

const { container, username, userinfo, midsection } = styles;
export default Profile;
