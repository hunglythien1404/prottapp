import React, {Component} from 'react';
import {DrawerNavigator} from 'react-navigation';
import MainNavigator from '@navigations/mainNavigator';
import Options from "../components/options";

export default DrawerNavigator(
  {
    MainScreen: {
      screen: MainNavigator,
    },
    Options: {
      screen: Options,
    }
  }
);