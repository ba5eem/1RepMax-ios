import React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity,KeyboardAvoidingView,StatusBar,AsyncStorage } from 'react-native';
//import LoginForm from './LoginForm';
import { StackNavigator } from 'react-navigation';

const link = {uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/205616-200.png'}
const size = {width: 100, height: 100, marginTop: 20};





export default class Login extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      username: '',
      password: ''
    }

    this.login=this.login.bind(this);
  }

  componentDidMount() {
    this._loadInitalState().done();
  }

  _loadInitalState = async () => {
    var value = await AsyncStorage.getItem('user');
    if(value !== null){
      this.props.navigation.navigate('Profile');
    }
  }

  login(){
    fetch("http://192.168.0.6:3000/users", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then((res) => res.json())
    .then((res) => {
      if(res.success === true){
        AsyncStorage.setItem('user', res.user);
        this.props.navigation.navigate('Profile');
      }

      else{
        alert(res.message);
      }
    }).done();

  }




  render() {





    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={link} style={size}/>
          <Text style={styles.title}>Login App</Text>
        </View>
        <View style={styles.formContainer}>
          <StatusBar
          barStyle="light-content">
        </StatusBar>
        <TextInput
          placeholder="username or email"
          onChangeText={ (username) => this.setState({username})}
          placeholderTextColor='rgba(255,255,255,0.6)'
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={()=>this.passwordInput.focus()}
          style={styles.input}/>
        <TextInput
          placeholder= "password"
          onChangeText={ (password) => this.setState({password})}
          placeholderTextColor='rgba(255,255,255,0.6)'
          secureTextEntry
          returnKeyType="go"
          ref={(input)=>this.passwordInput = input}
          style={styles.input}/>
        <TouchableOpacity 
          onPress={this.login}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
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
  title: {
    marginTop:20,
    color: "white",
    width: 160,
    textAlign: "center",
    opacity: 0.9

  },
  formContainer: {  
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
