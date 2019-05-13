/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
	createSwitchNavigator,
	createDrawerNavigator,
	createAppContainer,
	createBottomTabNavigator
} from 'react-navigation';

import AuthLoadingScreen from './src/screens/AuthLoadingScreen/AuthLoadingScreen';
import SignInScreen from './src/screens/SignIn/SignIn';
import SignUpScreen from './src/screens/SignUp/SignUp';
import ini_home from './src/screens/Ini_home/Ini_home';
import Publicaciones_ls from './src/screens/Publicaciones_ls/Publicaciones_ls';
import HomeScreen from './src/screens/Home/Home';
import ChatScreen from './src/screens/Chat/Chat';
import ViewAdopcionScreen from './src/screens/ViewAdopcion/ViewAdopcion';

<<<<<<< HEAD
const AppStack = createDrawerNavigator({ Home: HomeScreen, Other: ChatScreen});


const AuthStack = createBottomTabNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
=======
const AppStack = createDrawerNavigator({ Home: HomeScreen, Other: ChatScreen });
const AuthStack = createBottomTabNavigator({
	Sign: SignInScreen,
	SignUp: SignUpScreen,
	Home: HomeScreen,
	ViewAdopcion: ViewAdopcionScreen
>>>>>>> 65ab6d50f3bf95ae79fd20cd141ec4a03b8a32fe
});
export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: AuthLoadingScreen,
			App: AppStack,
			Auth: AuthStack
		},
		{
			initialRouteName: 'AuthLoading'
		}
	)
);
