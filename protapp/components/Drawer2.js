import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Header, Left, Body, Text} from 'native-base';

class Drawer2 extends Component {
  handleDrawer = () => {
    this.props.navigation.navigate("MainScreen");
  };
  render() {
    return (
      <Header style={{backgroundColor: "white"}}>
        <Left>
          <TouchableOpacity onPress={this.handleDrawer}>
            <Text style={{color: "blue"}}>BACK</Text>
          </TouchableOpacity>
        </Left>
        <Body>
        <Text>Drawer2</Text>
        </Body>
      </Header>
    );
  }
}

export default Drawer2;