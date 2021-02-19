import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpStudent from './src/screens/SignUpStudent';
import SignUpCompany from './src/screens/SignUpCompany';
import HomeScreen from './src/screens/HomeScreen';
import ForgotUsername from './src/screens/ForgotUsername';
import ForgotPassword from './src/screens/ForgotPassword';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUpStudent: SignUpStudent,
    SignUpCompany: SignUpCompany,
    Home: HomeScreen,
    ForgotUsername: ForgotUsername,
    ForgotPassword: ForgotPassword,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Untitled Oasis Project',
    },
  }
);

export default createAppContainer(navigator);
