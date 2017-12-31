import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, TouchableOpacity } from 'react-native';

const link = {uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/205616-200.png'}
const size = {width: 300, height: 300, marginTop: 20};
const users = [
    {id:1, movement: "BACK SQUAT"},
    {id:2, movement: "SNATCH"},
    {id:3, movement: "CLEAN"},
    {id:4, movement: "FRONT SQUAT"},
    {id:5, movement: "POWER CLEAN"}]
let arr = [];

class Home extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !==r2})
    this.state = {
      users: users,
      src: ds,
      active: false
      
    }
    this.onPress=this.onPress.bind(this);
  }
  componentDidMount() {
    let {users, active, src} = this.state;
    this.setState({ src: src.cloneWithRows(users) })
  }

  onPress(user){
    let {users, active, src} = this.state;
    if(arr.length === 0){
      arr.push(user);
      this.setState({ 
        src: src.cloneWithRows(arr),
        active: true
       })
    }
    if(active){
      arr.pop();
      this.setState({ 
        src: src.cloneWithRows(users),
        active: false
      })}
  }


  renderRow(user, sectionId, rowId, highlightRow){
    return (
      <TouchableOpacity onPress={()=>this.onPress(user)}>
      <View style={row}>
        <Text style={rowText}>{user.movement}</Text>
      </View>
    </TouchableOpacity>
    )
  }


  render(){
    return(
      <ListView
        renderRow={this.renderRow.bind(this)}
        dataSource={this.state.src}/>

      )
  }

}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: 100,
    width: 350,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#1a2633",
    marginTop: "4%"
  },
  rowText:{
    flex: 1,
    textAlign: "center",
    marginTop: 25,
    fontSize: 25,
    color: "white"
  }

});

const {row, rowText } = styles;

export default Home;
