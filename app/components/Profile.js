import React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity,KeyboardAvoidingView,StatusBar,AsyncStorage } from 'react-native';





export default class Profile extends React.Component {





  render() {





    return (
      <View style={styles.container}>
    
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.title}>yayayaayayaayya</Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {     
    flex: 1,                    
    backgroundColor: 'salmon' ,
    justifyContent: "center",
    alignItems: "center"    
  },
  title:{
    fontSize: 35
  }

});
