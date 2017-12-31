import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Home, Profile, Tabs, Lifts } from './components';
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
    return (
      <View style={styles.container}>
        <Tabs>
          {/* First tab */}
          <View title="HOME" style={styles.content}>
            <Home />
          </View>
          {/* Second tab */}
          <View title="LIFTS" style={styles.content}>
            <Lifts />
          </View>
          {/* Third tab */}
          <View title="PROFILE" style={styles.content}>
            <Profile />
          </View>

        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // App container
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor: '#1a2633',         // Background color
  },
  // Tab content container
  content: {
    flex: 1,                            // Take up all available space
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
    backgroundColor: '#738699',         // Darker background for content area
  },
  // Content header
  header: {
    margin: 10,                         // Add margin
    color: '#FFFFFF',                   // White color
    fontFamily: 'Avenir',               // Change font family
    fontSize: 26,                       // Bigger font size
  },
  // Content text
  text: {
    marginHorizontal: 20,               // Add horizontal margin
    color: 'rgba(255, 255, 255, 0.75)', // Semi-transparent text
    textAlign: 'center',                // Center
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});
