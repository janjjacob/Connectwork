import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SignUpStudent from './src/screens/SignUpStudent';
import SignUpCompany from './src/screens/SignUpCompany';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    SignUpStudent: SignUpStudent,
    SignUpCompany: SignUpCompany,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
