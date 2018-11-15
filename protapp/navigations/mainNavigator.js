import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import MainScreen from '@components/MainScreen';
import Setting from '@components/setting';
import Options from '@components/options';

export default StackNavigator (
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: {
        header: null,
      }
    },
    Options: {
      screen: Options,
      navigationOptions: {
        header: null,
      }
    }
  }
);