import React, { Component } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image
} from 'react-native';
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
					style={{
						resizeMode: 'contain',
						width: 60,
						height: 40,
						alignSelf: 'center'
					}}
				/>
				<Text style={{ color: 'white', marginTop: 10 }}>Back Home</Text>
			</TouchableOpacity>
		</View>
	);
};
class ProfileEdit extends Component {
	static navigationOptions = {
		title: 'Regresar',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-clipboard" size={25} color={tintColor} />;
		}
	};
	state = {
		userId: null,
		userName: '',
		userEmail: '',
		userPassword: '',
		picture: ''
	};
	static navigationsOptions = {
		drawerLabel: () => null
	};
	componentDidMount = async () => {
		const userName = await AsyncStorage.getItem('userName');
		const userEmail = await AsyncStorage.getItem('userEmail');
		const userPassword = await AsyncStorage.getItem('userEmail');
		this.setState({
			userName: userName,
			userEmail: userEmail
				});
		console.log('<<<<<<<<<<<<<<' + userName);
	};
	inputHandler = (text, field) => {
		this.setState({ [field]: text });
	};
	cambiachange = () => {
		this.props.navigation.navigate('header');
	};
	render() {
		return (
			<View>
			<View style={{ flexDirection: 'row' }} 
				 
			>
				
				<Ionicons name="md-arrow-round-back" size={25} style={formStyles.text1}  onPress={this.cambiachange}/>

					<Text style={{
								color: 'black',
								fontSize: 20,
								fontWeight: 'bold'
								}}					
								onPress={this.cambiachange}
								>
						Retroceder	
					</Text>
				</View>
				<Text style={styles.subtitle}>Editar Perfil</Text>
				<Input
					placeholder="Nombre de usuario"
					leftIcon={{ type: 'font-awesome', name: 'user' }}
					inputContainerStyle={formStyles.input}
					value={this.state.userName}
					onChangeText={text => this.inputHandler(text, 'userName')}
				/>
				<Input
					placeholder="Correo Electronico"
					leftIcon={{ type: 'font-awesome', name: 'envelope' }}
					inputContainerStyle={formStyles.input}
					value={this.state.userEmail}
					onChangeText={text => this.inputHandler(text, 'userEmail')}
				/>
				<Input
					placeholder="Telefono"
					leftIcon={{ type: 'font-awesome', name: 'key' }}
					inputContainerStyle={formStyles.input}
					value={this.state.userEmail}
					onChangeText={text => this.inputHandler(text, 'userEmail')}
				/>
				<TouchableOpacity
							onPress={this.cambiachange}
							style={{
											marginTop: 30,
											padding: 15,
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: 25,
											backgroundColor: '#cd853f',
											width:150,
											marginLeft:100
										}}
									>
										<Text
											style={{
												color: 'white',
												fontSize: 20,
												fontWeight: 'bold'
											}}
										>
											Guardar
										</Text>
						</TouchableOpacity>
			</View>
		);
	}
}
const formStyles = StyleSheet.create({
	container: {},
	input: {
		marginTop: 30
	},
	button: {
		marginTop: 20
	},
	subtitle: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 26,
		color: 'black',
		marginTop: 40
	},

});

export default ProfileEdit;
