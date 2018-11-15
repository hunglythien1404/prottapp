import React, {Component} from 'react';
import TabNavigator from '@navigations/tabNavigator';
import {DrawerActions} from 'react-navigation';

class MainScreen extends Component {
  handleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };
  handleOption = () => {
    this.props.navigation.navigate("Options");
  };
  render() {
    return (
      <TabNavigator screenProps={
        {
          handleDrawer: this.handleDrawer,
          handleOption: this.handleOption,
        }
      }/>

    );
  }
}

export default MainScreen;