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
      <View>
        <View style={Styles.imgContent}>
          <Icon name="paw" style={Styles.imgTab}/>
          <View style={{display: "flex", flexDirection: "row", flex: 1, justifyContent: "flex-end"}}>
            <Icon name="md-add" style={Styles.imgTab1}/>
            <Icon name="paw" style={Styles.imgTab2}/>
            <Icon name="ios-bonfire" style={Styles.imgTab3}/>
          </View>
        </View>
        <View>
          <View style={{flexDirection: "row"}}>
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
          <View style={{flexDirection: "row"}}>
            <NumKey content="1"/>
            <NumKey content="2"/>
            <NumKey content="3"/>
          </View>
          <View style={{flexDirection: "row"}}>
            <NumKey content="4"/>
            <NumKey content="5"/>
            <NumKey content="6"/>
          </View>
          <View style={{flexDirection: "row"}}>
            <NumKey content="7"/>
            <NumKey content="8"/>
            <NumKey content="9"/>
          </View>
          <View style={{flexDirection: "row"}}>
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