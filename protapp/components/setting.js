import React, {Component} from 'react';
import SettingsList from 'react-native-settings-list';
import {Icon, Right, Header} from 'native-base';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './../Styles';

class Setting extends Component {
  render() {
    return (
      <View style={{backgroundColor:'azure',flex:1}}>
        <TouchableOpacity onPress={this.props.handleSetting}>
          <Header style={{backgroundColor: "white"}}>
            <Text style={{color:'black', marginTop: 15, marginLeft:10, fontSize:20, height: 40}}>Settings</Text>
            <Right>
              <Icon name="md-add"/>
            </Right>
          </Header>
        </TouchableOpacity>
        <View style={{backgroundColor:'azure', marginTop: 30}}>
          <SettingsList borderColor='#d6d5d9'>
              <SettingsList.Item
                hasNavArrow={false}
                title='Wireless & networks'
                titleStyle={{color:'black', marginBottom:10}}
                itemWidth={40}
                backgroundColor="#EEEEEE"
              />
              <SettingsList.Item
                hasNavArrow={true}
                itemWidth={40}
                titleStyle={{color:'black', fontSize: 16}}
                title='Data usage'
                titleInfo="Get in"
              />
            <SettingsList.Item
              hasNavArrow={true}
              itemWidth={40}
              titleStyle={{color:'black', fontSize: 16}}
              title='Data usage'
              titleInfo="Get in"
            />

          </SettingsList>
        </View>
        <View style={{backgroundColor:'azure', marginTop: 50}}>
          <SettingsList borderColor='#d6d5d9'>
            <SettingsList.Item
              hasNavArrow={false}
              title='Wireless & networks'
              titleStyle={{color:'black', marginBottom:10}}
              itemWidth={40}
              backgroundColor="#EEEEEE"
            />
            <SettingsList.Item
              hasNavArrow={true}
              itemWidth={40}
              titleStyle={{color:'black', fontSize: 16}}
              title='Data usage'
            />
            <SettingsList.Item
              hasNavArrow={true}
              itemWidth={40}
              titleStyle={{color:'black', fontSize: 16}}
              title='Data usage'
            />
            <SettingsList.Item
              hasNavArrow={true}
              itemWidth={40}
              titleStyle={{color:'black', fontSize: 16}}
              title='Data usage'
            />
          </SettingsList>
        </View>
        <View style={{backgroundColor:'azure', marginTop: 50}}>
          <SettingsList borderColor='#d6d5d9'>
            <SettingsList.Item
              hasNavArrow={false}
              title='Wireless & networks'
              titleStyle={{color:'black', marginBottom:10}}
              itemWidth={40}
              backgroundColor="#EEEEEE"
            />
            <SettingsList.Item
              hasNavArrow={true}
              itemWidth={40}
              titleStyle={{color:'black', fontSize: 16}}
              title='Data usage'
            />
            <SettingsList.Item
              hasNavArrow={true}
              itemWidth={40}
              titleStyle={{color:'black', fontSize: 16}}
              title='Data usage'
            />
            <SettingsList.Item
              hasNavArrow={true}
              itemWidth={40}
              titleStyle={{color:'black', fontSize: 16}}
              title='Data usage'
            />
          </SettingsList>
        </View>
      </View>
    );
  }
}

export default Setting;