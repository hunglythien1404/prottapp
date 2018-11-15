/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Login from '@components/login';
import MainNavigator from '@navigations/mainNavigator';
import DrawerNavigator from '@navigations/drawerNavigator';

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
  }

  handleLogin = () => {
    this.setState({
      user: true,
    });
  };

  render() {
    if (this.state.user) {
      return <DrawerNavigator/>;
    }
    return (
      <Login handleLogin={this.handleLogin}/>
    );
  }
}

