import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {
  Icon
} from 'native-base';
import Tab1 from '@components/Tab1';
import Tab2 from '@components/Tab2';

export default createBottomTabNavigator(
  {
    Tab1: {
      screen: Tab1,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: () => {
          return <Icon name="md-home"/>
        }
      }
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: () => {
          return <Icon name="eye"/>
        }
      }
    }
  }
);