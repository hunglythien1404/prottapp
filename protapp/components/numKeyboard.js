import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Icon
} from 'native-base';
import {Styles} from "../Styles";
import NumKey from '@components/numKey';

class NumKeyboard extends Component {
  render() {
    return (
      <View style={{display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-between"}}>
        <View style={Styles.imgContent}>
          <Icon name="paw" style={{fontSize: 120}}/>
          <View style={Styles.imgContent2nd}>
            <Icon name="md-add" style={{fontSize: 15}}/>
            <Icon name="paw" style={{fontSize: 90}}/>
            <Icon name="ios-bonfire" style={{fontSize: 15}}/>
          </View>
        </View>
        <View>
          <View style={Styles.rowKey}>
            <TouchableOpacity style={Styles.numKeyBtn}>
              <Text style={{color: "blue", fontSize: 20}}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.numKeyBtn}>
              <Text style={{color: "blue", fontSize: 20}}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.numKeyBtn}>
              <Text style={{color: "blue", fontSize: 20}}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.rowKey}>
            <NumKey content="1"/>
            <NumKey content="2"/>
            <NumKey content="3"/>
          </View>
          <View style={Styles.rowKey}>
            <NumKey content="4"/>
            <NumKey content="5"/>
            <NumKey content="6"/>
          </View>
          <View style={Styles.rowKey}>
            <NumKey content="7"/>
            <NumKey content="8"/>
            <NumKey content="9"/>
          </View>
          <View style={Styles.rowKey}>
            <NumKey content="10"/>
            <NumKey content="11"/>
            <NumKey content="12"/>
          </View>
        </View>
      </View>
    );
  }
}

export default NumKeyboard;