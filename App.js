import React from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import Login from './app/components/Login.js';





export default class App extends React.Component {





  render() {





    return (
      <View style={styles.container}>
    
        <Login />



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
