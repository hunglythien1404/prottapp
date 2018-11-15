import React, {Component} from 'react';
import {
  Input,
  Container,
  Content,
  Button,
  Item,
  Text
} from 'native-base';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Styles} from './../Styles';

class Login extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={{width: 200}}>
          <Text>Username:</Text>
          <TextInput placeholder="input username" style={Styles.logIpt}/>
          <Text>Password:</Text>
          <TextInput placeholder="input password" style={Styles.logIpt}/>
        </View>
        <TouchableOpacity style={Styles.btnLog} onPress={this.props.handleLogin}>
          <Text style={{color: "white"}}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;