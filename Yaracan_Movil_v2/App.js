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
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation';

import AuthLoadingScreen from './src/screens/AuthLoadingScreen/AuthLoadingScreen';
import SignInScreen from './src/screens/SignIn/SignIn';
import SignUpScreen from './src/screens/SignUp/SignUp';
import HomeScreen from './src/screens/Home/Home';
import ChatScreen from './src/screens/Chat/Chat';
import Camera from './src/screens/Camera/Camera';
import Profile from './src/screens/Profile/Profile';
import ProfileEdit from './src/screens/Profile/ProfileEdit/ProfileEdit';
import Lists from './src/screens/Lists/Lists';
import Settings from './src/screens/Settings/Settings.js';
import View_Adopcion from './src/screens/View_Adopcion/View_Adopcion'; //VIsta de adopcion
import cardPost from './src/screens/ZonaPruebas/cardPost'; //para las cartas
import cardPurple from './src/screens/ZonaPruebas/cardPurple';
import headerNavigation from './src/screens/menu_slide/header_buttons';
import Alert from './src/screens/ZonaPruebas/alert';
import AlertConfig from './src/screens/ZonaPruebas/AlertConfig';

const AppStack = createDrawerNavigator({
	Home: HomeScreen,
	Chat: ChatScreen,
	Camera: Camera,
	Map: Map,
	ProfileEdit: ProfileEdit,
	Lists: Lists,
	Settings: Settings,
	View_Adopcion: View_Adopcion,
	cardPost: cardPost,
	cardPurple: cardPurple
});
const AuthStack = createStackNavigator({
	Sign: SignInScreen,
	SignUp: SignUpScreen,
	Profile: ProfileEdit
});
export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: AuthLoadingScreen,
			App: AppStack,
			Auth: AuthStack,
			header: headerNavigation,
			Alert: Alert
		},
		{
			initialRouteName: 'AuthLoading'
		}
	)
);
