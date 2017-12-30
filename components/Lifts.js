import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView,TouchableOpacity,TouchableHighlight,Navigator } from 'react-native';

const users = [{
    name: 'Baseem'
  },{
    name: 'Adeeb'
  },{
    name: "Bruce"
  },{
    name: "Clark"
  }]


class Main extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !==r2})
    this.state = {
      userDataSource: ds.cloneWithRows(users)
    }
    this.onPress=this.onPress.bind(this);
  }

  onPress(user){
    console.log(this.props.navigator);
  }


  renderRow(user, sectionId, rowId, highlightRow){
    return (
      <TouchableHighlight onPress={()=>this.onPress(user)}>
      <View style={row}>
        <Text style={rowText}>ssssssssss</Text>
      </View>
    </TouchableHighlight>
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
  row: {
    flexDirection: "row",
    height: 50,
    width: 200,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f4f4f4",
    marginBottom: 3
  },
  rowText:{
    flex: 1,
    textAlign: "center"
  }
});

const { container, row, rowText } = styles;
export default Main;
