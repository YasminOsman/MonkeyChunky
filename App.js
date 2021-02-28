import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: ""
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.inputBox} 
          onChangeText={text => { this.setState({ text: text }); }} value={this.state.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    marginTop: 200, width: '80%', alignSelf: 'center', height: 40, textAlign: 'center', borderWidth: 4, //outline: 'none',
  }
});
