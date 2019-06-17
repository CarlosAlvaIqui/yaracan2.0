import {
	createSwitchNavigator,
	createDrawerNavigator,
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator
} from 'react-navigation';

import profileeditable from '../Profile/ProfileEdit/ProfileEdit';
import heanav from './header_buttons';

const funcara = createStackNavigator(
	{
		proedi: {
			screen: profileeditable,
		},
		naver: {
			screen: heanav,
		}
	}

);

const Apps3 = createAppContainer(funcara);
export default Apps3;
