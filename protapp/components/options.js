import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import SettingsList from 'react-native-settings-list';
import {Container, Header, Left, Content, Text} from 'native-base';

class Options extends Component {
  handleMain = () => {
    this.props.navigation.navigate("MainScreen");
  };
  render() {
    return (
      <View>
        <Header style={{backgroundColor: "white"}}>
          <Left>
            <TouchableOpacity onPress={this.handleMain}>
              <Text style={{color: "blue"}}>BACK</Text>
            </TouchableOpacity>
          </Left>
          <Content>
            <View style={{marginTop: 15}}>
              <Text>Option</Text>
            </View>
          </Content>
        </Header>
        <View style={{backgroundColor:'white'}}>
          <SettingsList borderColor='#d6d5d9'>
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

export default Options;