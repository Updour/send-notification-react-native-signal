/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import FetchiNgdAtas from './src/components/fetchiNgdAtas'
import RNOneSignal from './src/components/oneSignalPush'
import DashBoArdList from './src/dashboard/dAhboArdList.js'
export default class App extends Component<Props> {
  render() {
    return (
      <DashBoArdList />
    );
  }
}
