/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';


export default class App extends Component {
  /*
  constructor(){
    super();
    this.state = {
      isLoading: true,
      dataSource: [] 
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      })
    })
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
          <ActivityIndicator size="Large" animating />
        </View>
      )
    }else{
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => index}
 />
      </View>
    );
    }
  } 
*/



//funcional

state = {
  data: []
};

componentWillMount(){
  this.fetchData();
}

fetchData = async () => {
  const response = await fetch("https://randomuser.me/api?results=500");
  const json = await response.json();
  this.setState({ data: json.results });        
};

render(){
  return(
    <View style={styles.container}>
      <FlatList 
      data={this.state.data}
      keyExtractor={(x, i) => i}
      renderItem={({ item }) => 
      <Text>
        {`${item.name.first} ${item.name.last}  `}
      </Text>}
      />
    </View>
  )
}


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
