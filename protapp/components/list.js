import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Styles} from "../Styles";
import ListItem from '@components/listItems';

class List extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: "row", justifyContent: "center", marginTop: 20, marginBottom: 25}}>
          <TouchableOpacity style={Styles.listBtn1}>
            <Text style={{color: "white"}}>Button</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.listBtn2}>
            <Text style={{color: "white"}}>Button</Text>
          </TouchableOpacity>
        </View>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </View>
    );
  }
}

export default List;