import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home, Profile } from './components';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';

const NavApp = StackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
}, {
  navigationOptions: {
    headerStyle:{
      marginTop: Expo.Constants.statusBarHeight
      }
    }
});


export default class App extends React.Component {
  render() {
    return ( <NavApp/>
    );
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