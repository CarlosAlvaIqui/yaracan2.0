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
import View_AdopcionScreen from './src/screens/ViewAdopcion/View_Adopcion';
const AppStack = createDrawerNavigator({ Home: HomeScreen, Other: ChatScreen });
const AuthStack = createBottomTabNavigator({
	Sign: SignInScreen,
	SignUp: SignUpScreen
});
export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: AuthLoadingScreen,
			App: AppStack,
			Auth: AuthStack,
			View_Adopcion: View_AdopcionScreen
		},
		{
			initialRouteName: 'AuthLoading'
		}
	)
);
