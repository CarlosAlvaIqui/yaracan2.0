import {
	createSwitchNavigator,
	createDrawerNavigator,
	createAppContainer,
	createBottomTabNavigator,
	createMaterialTopTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SingIns from '../SignIn/SignIn';
import SingUps from '../SignIn/SignIn';
import viewHeader from '../ZonaPruebas/cardPost';
import profile from '../Profile/Profile';
import view_adopciones from '../View_Adopcion/View_Adopcion';
import Bar_buttons2 from '../menu_slide/bar_buttons';
import Icon from 'react-native-ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
const Mi_top_bar = createMaterialTopTabNavigator(
	{
		Sing1: {
			screen: viewHeader,
			navigationOptions: { header: null }
		},
		Sing2: {
			screen: view_adopciones,
			navigationOptions: { header: null }
		},
		Sing3: {
			screen: Bar_buttons2,
			navigationOptions: { header: null }
		},
		Sing4: {
			screen: profile,
			navigationOptions: { header: null }
		},
	
	},
	{
		tabBarPosition: 'top',
		tabBarOptions: {
			activeTintColor: '#0084ff',
			showIcon: true,
			showLabel: false,	
			style: {
				backgroundColor: '#cd853f',
				color: '#fff'
			  },
		},
	}
);

const Apps2 = createAppContainer(Mi_top_bar);
export default Apps2;
