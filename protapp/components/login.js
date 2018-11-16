import React, {Component} from 'react';
import {
  Text,
  Spinner
} from 'native-base';
import {View, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import {Styles} from './../Styles';
import {connect} from 'react-redux';
import * as actions from '@actions/loginActions';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loadLogin: false,
    };
  }

  handleLogin = async () => {
    this.setState({loadLogin: true});
    this.props.checkLogin(this.state);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({loadLogin: false})
  }


  render() {
    return (
      <View style={Styles.container}>
        <View style={{width: 200}}>
          <Text>Username:</Text>
          <TextInput
            placeholder="input username"
            style={Styles.logIpt}
            value={this.state.username}
            onChangeText={(username) => {this.setState({username});}}
            />
          <Text>Password:</Text>
          <TextInput
            placeholder="input password"
            style={Styles.logIpt}
            value={this.state.password}
            onChangeText={(password) => {this.setState({password});}}
            />
        </View>
        <TouchableOpacity style={Styles.btnLog} onPress={this.handleLogin}>
          <Text style={{color: "white"}}>LOG IN</Text>
        </TouchableOpacity>
        {this.state.loadLogin
          ? <Spinner color='white' style=
              {{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.50)',
                width: 60,
                height: 60,
                borderRadius: 5,
              }}
              />
            : null
        }
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      checkLogin: (user) => {
        dispatch(actions.checkLogin(user));
      }
  };
};

export default connect(null, mapDispatchToProps) (Login);