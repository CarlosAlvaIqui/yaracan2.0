import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
	ToastAndroid,
	ScrollView
} from 'react-native';
import Icon from 'react-native-ionicons';
import { Hoshi } from 'react-native-textinput-effects';
import { Input, Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import imgBackground from '../../assets/img/perritos.jpg';
import axios from '../../lib/axios';

export default class SignUp extends React.Component {
	static navigationOptions = {
		title: 'Regresar',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-clipboard" size={25} color={tintColor} />;
		}
	};

	state = {
		username: '',
		password: '',
		loading: false,
		showPassword: false,
		email: ''
	};

	showPassword = () => {
		this.setState({ showPassword: !this.state.showPassword });
	};
	inputHandler = (field, value) => {
		this.setState({ [field]: value });
	};
	_scrollToInput = () => {
		const scrollResponder = this.refs.myScrollView.getScrollResponder();
		const inputHandle = React.findNodeHandle(this.refs.myInput);

		scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
			inputHandle, // The TextInput node handle
			0, // The scroll view's bottom "contentInset" (default 0)
			true // Prevent negative scrolling
		);
	};

	onSubmitHandler = () => {
		if (this.state.user === '' || this.state.password === '') {
			return ToastAndroid.showWithGravity(
				'Falta ingresar datos!',
				ToastAndroid.SHORT,
				ToastAndroid.TOP
			);
		}
		this.setState({ loading: true });
		axios({
			method: 'POST',
			url: 'api/user/signup',
			data: {
				username: this.state.username,
				password: this.state.password,
				email: this.state.email
			}
		})
			.then(() => {})
			.catch(err => {
				ToastAndroid.showWithGravity(
					'Hubo un problema con el registro',
					ToastAndroid.LONG,
					ToastAndroid.TOP
				);
				console.warn(err);
				this.setState({ loading: false });
			});
	};
	_showMoreApp = () => {
		this.props.navigation.navigate('chat');
	};
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
	cambiaotro = () => {
		this.props.navigation.navigate('home_botones');
	};
	envioaotrapagina = () => {
		this.props.navigation.navigate('SignIn');
	};
	//codigo de chullo no BORRAR
	// este es tu codigo  chullito desde la linea 86 hasta 210

	render() {
		return (
			<View style={{ flex: 1 }}>
			
					<ScrollView style={formStyles.container}>
						<Text style={formStyles.subtitle}>Registro</Text>
						<Input
							placeholder="  Nombre de usuario"
							leftIcon={{ type: 'font-awesome', name: 'user' }}
							inputContainerStyle={formStyles.input}
							value={this.state.username}
							onChangeText={text => this.inputHandler('username', text)}
						/>
						<Input
							placeholder=" Email "
							leftIcon={{ type: 'font-awesome', name: 'user' }}
							inputContainerStyle={formStyles.input}
							value={this.state.email}
							onChangeText={text => this.inputHandler('email', text)}
						/>
						<Input
							placeholder="contraseña"
							leftIcon={{ type: 'font-awesome', name: 'key' }}
							inputContainerStyle={formStyles.input}
							value={this.state.password}
							secureTextEntry={!this.state.showPassword}
							onChangeText={text => this.inputHandler('password', text)}
						/>

						<Input
							placeholder="contraseña"
							leftIcon={{ type: 'font-awesome', name: 'key' }}
							inputContainerStyle={formStyles.input}
							value={this.state.password}
							secureTextEntry={!this.state.showPassword}
							onChangeText={text => this.inputHandler(text, 'password')}
						/>
						<TouchableOpacity
							onPress={this.onSubmitHandler}
							style={{
											marginTop: 30,
											padding: 15,
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: 25,
											backgroundColor: '#cd853f'
										}}
									>
										<Text
											style={{
												color: 'white',
												fontSize: 20,
												fontWeight: 'bold'
											}}
										>
											Registrarse
										</Text>
						</TouchableOpacity>
					</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerflat: {
		justifyContent: 'center',
		alignItems: 'center'
	},

	top: {
		height: '15%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	bottom: {
		height: '45%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 5
	},
	bottomItem: {
		width: '50%',
		height: '50%',
		padding: 5
	},
	bottomItemInner: {
		flex: 1,
		opacity: 0.8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	botoncolor: {
		color: 'white'
	}
});
const formStyles = StyleSheet.create({
	container: {
		padding: 10
	},
	subtitle: {
		fontSize: 40,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		color:'#191919',
	},
	input: {
		marginTop: 20
	},
	button: {
		marginTop: 10
	}
});
