/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//mas 
// build ulang mas appnya, sek mas, coba cek in di build gradlenya mas
// coba build mas
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import RNOneSignal from './src/components/oneSignalPush'
import Test from './src/components/Test'
import DashBoArdList from './src/dashboard/dAhboArdList'
import HomeScreenRouter from './src/dashboard/'
import OfflineNotice from './src/dashboard/OfflineNotice'
export default class App extends Component<Props> {
  render() {
    return (
      <DashBoArdList />
    );
  }
}
