import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import DashBoArdList from './dAhboArdList'
import SettingServer from '../components/SettingServer'
import SideBar from "../sidebar/sidebArSetting";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    // Home: { screen: HomeScreen },
    Home : { screen : DashBoArdList},
    Setting : { screen : SettingServer }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
