import React from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import Login from './app/components/Login.js';
import Profile from './app/components/Profile.js';
import { StackNavigator } from 'react-navigation';


const Application = StackNavigator({
  Home: { screen: Login },
  Profile: { screen: Profile },
  }, {
      navigationOptions: {
        header: false,
      }
})





export default class App extends React.Component {





  render() {





    return (
      <View style={styles.container}>
      <Application />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                         
    backgroundColor: '#1a2633'      
  }

});
