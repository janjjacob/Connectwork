import React, { Component } from 'react';
import { View, Text, Settings } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpStudent from './src/screens/SignUpStudent';
import SignUpCompany from './src/screens/SignUpCompany';
import HomeScreen from './src/screens/HomeScreen';
import ForgotUsername from './src/screens/ForgotUsername';
import ForgotPassword from './src/screens/ForgotPassword';
import SettingsScreen from './src/screens/SettingsScreen';

import * as firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYSmwXc4ga5dBQdfeFVdQEMhqUo6N7auY",
  authDomain: "untitled-oasis-project.firebaseapp.com",
  projectId: "untitled-oasis-project",
  storageBucket: "untitled-oasis-project.appspot.com",
  messagingSenderId: "36325963141",
  appId: "1:36325963141:web:724186fe298dde6ea4c0ec",
  measurementId: "G-VPR91JF27V"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// const navigator = createStackNavigator(
//   {
//     Login: LoginScreen,
//     SignUpStudent: SignUpStudent,
//     SignUpCompany: SignUpCompany,
//     Home: HomeScreen,
//     ForgotUsername: ForgotUsername,
//     ForgotPassword: ForgotPassword,
//     Settings: SettingsScreen,
//   },
//   {
//     initialRouteName: 'Login',
//     defaultNavigationOptions: {
//       title: 'Untitled Oasis Project',
//     },
//   }
// );

// export default createAppContainer(navigator);

const Stack = createStackNavigator();

const getUserData = async () => {
  firebase
      .database()
      .ref('users/' + firebase.auth().currentUser.uid)
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val())
      });
}

export class App extends Component {

  constructor(props) {
    super();
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
              name='Login'
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='SignUpStudent' component={SignUpStudent} />
            <Stack.Screen name='SignUpCompany' component={SignUpCompany} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Settings' component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
