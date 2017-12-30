import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Profile extends React.Component{
  static navigationOptions = {
    title: 'Profile',
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={container}>
        <Text
          onPress = {()=>navigate('Home')}>
          navigate to Home
        </Text>
      </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
});

const {container} = styles;