import React, {Component} from 'react';
import {View, Text, Slider} from 'react-native';
import {Icon} from 'native-base';

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <View style={{flexDirection: "row", borderWidth: 1, borderColor: "gray", borderLeftWidth: 0, borderRightWidth: 0, height: 80}}>
        <View>
          <Text>Light</Text>
          <Icon name="ios-sunny-outline" style={{fontSize: 50}}/>
        </View>
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Slider
            style={{ width: 300 }}
            step={1}
            minimumValue={0}
            maximumValue={100}
            value={this.state.value}
            onValueChange={val => this.setState({ age: val })}
            onSlidingComplete={(value) => {
              this.setState({value});}}
          />
          <Text>{this.state.value}</Text>
        </View>
      </View>
    );
  }
}

export default ListItems;