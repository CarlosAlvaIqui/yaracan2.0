import {
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	View,
	TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import { NavigationBar } from 'navigationbar-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ComponentLeft = () => {
	return (
		<View style={{ flex: 1, alignItems: 'flex-start' }}>
			<TouchableOpacity
				style={{ justifyContent: 'center', flexDirection: 'row' }}
			>
				<Text style={{ color: 'white' }}>Back Home</Text>
			</TouchableOpacity>
		</View>
	);
};

const ComponentCenter = () => {
	return (
		<View style={{ flex: 1 }}>
			<Text style={{ color: 'white' }}>Back Home</Text>
		</View>
	);
};

const ComponentRight = () => {
	return (
		<View style={{ flex: 1, alignItems: 'flex-end' }}>
			<TouchableOpacity>
				<Text style={{ color: 'white' }}> Right </Text>
			</TouchableOpacity>
		</View>
	);
};
const ComponentRights = () => {
	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity>
				<Text style={{ color: 'white' }}> Right1 </Text>
			</TouchableOpacity>
		</View>
	);
};

class Appxd extends React.Component {
	static navigationOptions = {
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-paper" size={25} color={tintColor} />;
		}
	};
	render() {
		return (
			<View>
				<NavigationBar
					componentLeft={() => <ComponentLeft />}
					componentCenter={() => <ComponentCenter />}
					componentRight={() => <ComponentRight />}
					ComponentRights={() => <ComponentRights />}
					navigationBarStyle={{ backgroundColor: '#215e79' }}
					statusBarStyle={{
						barStyle: 'light-content',
						backgroundColor: '#215e79'
					}}
				/>
			</View>
		);
	}
}
export default Appxd;
