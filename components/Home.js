import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Home extends React.Component{
  static navigationOptions = {
    title: 'Home',
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={container}>
        <Text
          onPress = {()=>navigate('Profile')}>
          navigate to Profile
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