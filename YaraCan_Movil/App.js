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
import HomeScreen from './src/screens/Home/Home';
import ChatScreen from './src/screens/Chat/Chat';
import ViewAdopcionScreen from './src/screens/ViewAdopcion/ViewAdopcion';

const AppStack = createDrawerNavigator({ Home: HomeScreen, Other: ChatScreen });
const AuthStack = createBottomTabNavigator({
	Sign: SignInScreen,
	SignUp: SignUpScreen,
	Home: HomeScreen,
	ViewAdopcion: ViewAdopcionScreen
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
