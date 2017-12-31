import React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';






export default class LoginForm extends React.Component {





  render() {





    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content">
        </StatusBar>
        <TextInput
          placeholder="username or email"
          placeholderTextColor='rgba(255,255,255,0.6)'
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={()=>this.passwordInput.focus()}
          style={styles.input}/>
        <TextInput
          placeholder= "password"
          placeholderTextColor='rgba(255,255,255,0.6)'
          secureTextEntry
          returnKeyType="go"
          ref={(input)=>this.passwordInput = input}
          style={styles.input}/>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {  
    padding: 20    
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: "white",
    paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: 'blue',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: "center",
    color: "white",
    fontWeight: "700"
  }

});
