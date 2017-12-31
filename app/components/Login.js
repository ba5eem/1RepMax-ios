import React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

const link = {uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/205616-200.png'}
const size = {width: 100, height: 100, marginTop: 20};




export default class Login extends React.Component {





  render() {





    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={link} style={size}/>
          <Text style={styles.title}>Login App</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>




      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                         
    backgroundColor: 'cornflowerblue'      
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"

  },
  formContainer: {

  },
  title: {
    marginTop:20,
    color: "white",
    width: 160,
    textAlign: "center",
    opacity: 0.9

  }

});
