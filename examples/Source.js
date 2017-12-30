import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView,TouchableOpacity } from 'react-native';

const users = [{
    name: 'Baseem'
  },{
    name: 'Adeeb'
  },{
    name: "Bruce"
  },{
    name: "Clark"
  }]

class Source extends Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !==r2})
    this.state = {
      userDataSource: ds,
    }

  }

  componentDidMount() {
    this.fetchusers();
  }

  fetchusers(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) =>{
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(response);
        })
      })
  }
  
  renderRow(user, sectionId, rowId, highlightRow){
    return (
    <View style={row}>
      <Text style={rowText}>{user.name}</Text>
    </View>
    )
  }


  render(){
    return(
      <ListView
        renderRow={this.renderRow.bind(this)}
        dataSource={this.state.userDataSource}/>

      )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100
  },
  vA:{
    flex: 1,
    backgroundColor: "salmon",
    padding: 10
  },
  vB:{
    flex: 1,
    backgroundColor: "cornflowerblue",
    padding: 10
  },
  vC:{
    flex: 1,
    backgroundColor: "lightgreen",
    padding: 10
  }

});

const { container, vA, vB, vC } = styles;

export default Source;
