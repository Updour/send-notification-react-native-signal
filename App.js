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

export default class App extends Component<Props> {
  render() {
    return (
      <FetchiNgdAtas />
    );
  }
}
