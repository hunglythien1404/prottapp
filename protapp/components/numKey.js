import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Styles} from "../Styles";

class NumKey extends Component {
  render() {
    return (
      <TouchableOpacity style={Styles.numKey}>
        <Text style={{fontSize: 20}}>{this.props.content}</Text>
      </TouchableOpacity>
    );
  }
}

export default NumKey;