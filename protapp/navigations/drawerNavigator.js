import React, {Component} from 'react';
import {DrawerNavigator} from 'react-navigation';
import MainNavigator from '@navigations/mainNavigator';
import Options from "../components/options";
import Drawer1 from '@components/Drawer1';
import Drawer4 from '@components/Drawer4';
import Drawer3 from '@components/Drawer3';
import Drawer2 from '@components/Drawer2';

export default DrawerNavigator(
  {
    MainScreen: {
      screen: MainNavigator,
      navigationOptions: {
        drawerLabel: () => null
      }
    },
    Drawer1: {
      screen: Drawer1,
    },
    Drawer2: {
      screen: Drawer2
    },
    Drawer3: {
      screen: Drawer3
    },
    Drawer4: {
      screen: Drawer4
    },
  },
  {
    contentOptions: {
      activeTintColor: "red",
    }
  }
);