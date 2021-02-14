import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpStudent from './src/screens/SignUpStudent';
import SignUpCompany from './src/screens/SignUpCompany';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUpStudent: SignUpStudent,
    SignUpCompany: SignUpCompany,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
