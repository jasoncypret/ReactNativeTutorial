import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { ViewOne, ViewTwo } from './src/components/screens';

import { createAppContainer, createStackNavigator } from 'react-navigation';


type Props = {};

const RootStack = createStackNavigator(
  {
    ViewOne: {
      screen: ViewOne,
    },
    ViewTwo: {
      screen: ViewTwo,
    },
  }, {
    initialRouteName: 'ViewOne',
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}
