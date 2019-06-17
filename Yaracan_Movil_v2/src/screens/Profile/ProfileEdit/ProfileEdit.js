import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from '../../../screens/styles/global';
import { Avatar } from 'react-native-gifted-chat';
import { NavigationBar } from 'navigationbar-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
retroceder = () => {
	this.props.navigation.navigate('header');
};

const ComponentLeft = () => {
	return (
		<View style={{ flex: 1, alignItems: 'flex-start' }}>
			<TouchableOpacity
				style={{ justifyContent: 'center', flexDirection: 'row' }}
			>
				<Image 
          source={require('../../../assets/img/left-arrow.png')}
          style={{ resizeMode: 'contain', width: 60, height: 40, alignSelf: 'center' }}
        />
				<Text style={{ color: 'white',marginTop:10 }}>Back Home</Text>
			</TouchableOpacity>
		</View>
	);
};
class ProfileEdit extends Component {
	static navigationOptions = {
		title: 'Bienvenido a la pp mrd registra p!',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-clipboard" size={25} color={tintColor} />;
		}
	};
	state = {
		userId: null,
		userName: '',
		userEmail: '',
		picture: ''
	};
	static navigationsOptions = {
		drawerLabel: () => null
	};
	
	componentDidMount = async () => {
		const userName = await AsyncStorage.getItem('userName');
		const userEmail = await AsyncStorage.getItem('userEmail');
		this.setState({
			userName: userName,
			userEmail: userEmail
		});
	};
	inputHandler = (text, field) => {
		this.setState({ [field]: text });
	};
	cambiachange = () => {
		this.props.navigation.navigate('header');
	};
	render() {
		return (
			<ScrollView style={formStyles.container}>
				<NavigationBar
					componentLeft={() => <ComponentLeft />}
					ComponentRights={() => <ComponentRights />}
					navigationBarStyle={{ backgroundColor: '#215e79',marginTop:-10 }}
					statusBarStyle={{
						barStyle: 'light-content',
						backgroundColor: '#215e79'
					}}
				/>
				<Text style={styles.subtitle}>Editar perfil</Text>
				<Input
					placeholder="Nombre de usuario"
					leftIcon={{ type: 'font-awesome', name: 'user' }}
					inputContainerStyle={formStyles.input}
					/*value={this.state.userName}
					onChangeText={text => this.inputHandler(text, 'userName')}*/
				/>
				<Input
					placeholder="Correo Electronico"
					leftIcon={{ type: 'font-awesome', name: 'envelope' }}
					inputContainerStyle={formStyles.input}
					/*value={this.state.userEmail}
					onChangeText={text => this.inputHandler(text, 'userEmail')}*/
				/>
				<Input
					placeholder="Correo Electronico"
					leftIcon={{ type: 'font-awesome', name: 'envelope' }}
					inputContainerStyle={formStyles.input}
					/*value={this.state.userEmail}
					onChangeText={text => this.inputHandler(text, 'userEmail')}*/
				/>
				<Button title="Guardar perfil" containerStyle={formStyles.button} />
				<Button title="Guardar " containerStyle={formStyles.button}
				onPress={this.retroceder} />

			</ScrollView>
		);
	}
}
const formStyles = StyleSheet.create({
	container: {
	
	},
	input: {
		marginTop: 30
	},
	button: {
		marginTop: 10
	}
});

export default ProfileEdit;
