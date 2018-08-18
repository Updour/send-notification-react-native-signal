import React, { Component } from "react";
import {
	View, 
	Text, NetInfo
} from 'react-native';
import OneSignal from 'react-native-onesignal';

export default class Test extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
        NetInfo.isConnectionExpensive()
        .then(isConnectionExpensive => {
          console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));
      })
        .catch(error => {
          console.error(error);
      });
	}

	componentDidMount() {
        OneSignal.init("fd977379-09d6-4638-af0b-1db4ce5ee459");
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds.bind(this));

        OneSignal.configure();
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds.bind(this));
    }

    onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    }

    onIds(device) {
        console.warn('Device info: ', device);
    }

    render() {
    	return(
    		<View>
    			<Text>Test aja</Text>
    		</View>
    	)
    }
}