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

const Mi_top_bar = createMaterialTopTabNavigator(
	{
		Sing1: {
			screen: viewHeader,
			navigationOptions: { header: null, title: 'Publicaciones' }
		},
		Sing2: {
			screen: view_adopciones,
			navigationOptions: { header: null, title: 'Adopcion' }
		},
		Sing3: {
			screen: Bar_buttons2,
			navigationOptions: { header: null, title: 'Messages3' }
		},
		Sing4: {
			screen: profile,
			navigationOptions: { header: null, title: 'Perfil' }
		}
	},
	{
		tabBarPosition: 'top',
		tabBarOptions: {
			activeTintColor: '#0084ff'
		}
	}
);

const Apps2 = createAppContainer(Mi_top_bar);
export default Apps2;
