import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Styles} from "../Styles";

class CircleButton extends Component {
  render() {
    return (
      <TouchableOpacity style={Styles.btnCircle}>
        <Text style={{color: "white"}}>{this.props.content}</Text>
      </TouchableOpacity>
    );
  }
}

export default CircleButton;