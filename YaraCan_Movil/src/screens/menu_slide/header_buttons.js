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
import Bar_buttons2 from '../menu_slide/bar_buttons';

const Mi_top_bar = createMaterialTopTabNavigator({
    Sing1:{
        screen: SingIns,
        navigationOptions:{ header: null, title: 'Messages',}
    },
    Sing2:{
        screen: SingUps,
        navigationOptions:{ header: null, title: 'Messages2'}       
    },
    Sing3:{
        screen: Bar_buttons2,
        navigationOptions:{ header: null, title: 'Messages3'}       
    },
    Sing4:{
        screen: Bar_buttons2,
        navigationOptions:{ header: null, title: 'Messages4'}       
    },
    Sing5:{
        screen: Bar_buttons2,
        navigationOptions:{ header: null, title: 'Messages5'}       
    },

},
{
    tabBarPosition: 'top',
    tabBarOptions: {
        activeTintColor: '#0084ff',
    }
}
);

const Apps2 = createAppContainer(Mi_top_bar);
export default Apps2;