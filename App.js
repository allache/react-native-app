/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



  export default class App extends Component{
  constructor(properties) {
    super(properties);





    alert("malekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk3");
    console.log("malekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk4");
    OneSignal.init("3fe69658-5649-4599-85b2-3b6294598631");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);

  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);

    OneSignal.configure();
  }

  onReceived(notification) {
    alert("Notification received: ", notification);
  }

  onOpened(openResult) {
    alert('Message: ', openResult.notification.payload.body);
    alert('Data: ', openResult.notification.payload.additionalData);
    alert('isActive: ', openResult.notification.isAppInFocus);
    alert('openResult: ', openResult);
  }

  onIds(device) {
    alert('Device info:', device);

  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
    );
  }
};
alert("malekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
  console.log("malekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk2");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }});

