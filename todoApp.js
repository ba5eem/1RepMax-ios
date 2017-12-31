import React from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import Note from './app/components/Note.js';





export default class App extends React.Component {

  state = {
    noteArray: [],
    noteText: ''
  }

  addNote(){
    if(this.state.noteText){
      let d = new Date();
      this.state.noteArray.push({'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(), "note": this.state.noteText});
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: ''})
    }
  }

  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({ noteArray: this.state.noteArray })
  }





  render() {
     let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={ ()=>this.deleteNote(key)}/>
     })




    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerText}> - NOTER - </Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {notes}



        </ScrollView>

        <View style={styles.footer}>
          
          <TouchableOpacity
            onPress={this.addNote.bind(this)}
            style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput}
            onChangeText={(noteText)=> this.setState({noteText})}
            value={this.state.noteText}
            placeholder='> note' 
            placeholderTextColor="white">
          </TextInput>

        </View>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                         
    backgroundColor: '#1a2633'      
  },
  header: {
    backgroundColor: "salmon",
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },
  headerText:{
    color: "white",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0
  },
  addButton: {
    backgroundColor: 'salmon',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: 'black'
  }

});
