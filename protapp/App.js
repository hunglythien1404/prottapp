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
import {connect} from 'react-redux';

class App extends Component<Props> {
  render() {
    if (this.props.isLogin) {
      return <DrawerNavigator/>;
    }
    return (
      <Login handleLogin={this.handleLogin} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.loginReducer,
  }
};

export default connect(mapStateToProps, null) (App);

