import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
	ToastAndroid,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fumi } from 'react-native-textinput-effects';
import { Input, Button } from 'react-native-elements';
import imgBackground from '../../assets/img/perritos2.jpg';
import Icon from 'react-native-ionicons';
import axios from '../../lib/axios';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../styles/global';
export default class SignInScreen extends React.Component {
	static navigationOptions = {
		header: null
	};
	state = {
		user: '',
		password: '',
		loading: false,
		showPassword: false
	};
	showPassword = () => {
		this.setState({ showPassword: !this.state.showPassword });
	};
	inputHandler = (text, field) => {
		this.setState({ [field]: text });
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
			url: 'api/user/signin',
			data: {
				username: this.state.user,
				password: this.state.password
			}
		})
			.then(async response => {
				console.log(response.data);
				this.props.navigation.navigate('header');
				await AsyncStorage.setItem('userId', response.data.data._id);
				await AsyncStorage.setItem('userName', response.data.data.username);
				await AsyncStorage.setItem('userEmail', response.data.data.email);
				await AsyncStorage.setItem('userToken', response.data.data.token);
				ToastAndroid.showWithGravity(
					response.data.message,
					ToastAndroid.LONG,
					ToastAndroid.TOP
				);
				await AsyncStorage.setItem('userToken', response.data.token);
			})
			.catch(err => {
				ToastAndroid.showWithGravity(
					'Hubo un error en el registro',
					ToastAndroid.LONG,
					ToastAndroid.TOP
				);
				console.warn(err);
				this.setState({ loading: false });
			});
	};
	registerHandler = () => {
		this.props.navigation.navigate('SignUp');
	};
	defrente = () => {
		this.props.navigation.navigate('header');
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={imgBackground}
					style={{ width: '100%', height: '100%',opacity:0.9 }}
				>
					<ScrollView style={formStyles.container}>
						<Text style={formStyles.subtitle}>
							Yara Can
						</Text>
						<Input
							placeholder="  Nombre de usuario"
							leftIcon={{ type: 'font-awesome', name: 'user' }}
							inputContainerStyle={formStyles.input}
							value={this.state.user}
							onChangeText={text => this.inputHandler(text, 'user')}
						/>
						<Input
							placeholder="  contraseña"
							leftIcon={{ type: 'font-awesome', name: 'key' }}
							inputContainerStyle={formStyles.input}
							value={this.state.password}
							secureTextEntry={!this.state.showPassword}
							onChangeText={text => this.inputHandler(text, 'password')}
						/>
						<Button
							title="Iniciar Sesion"
							containerStyle={formStyles.button}
							onPress={this.onSubmitHandler}
						/>
						<View
                            style={{
                                marginTop:10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center' 
                            }}>
                            <Text style={{ color: '#fff', fontSize: 18}}
							style={formStyles.text}>
                                No tienes una cuenta?
                                <Text
                                    onPress={this.registerHandler}
                                    style={{
                                        color: '#fff',
                                        fontSize: 20,
                                        fontWeight: 'bold'
                                    }}
                                >
                                {''}
                                    Registrarse aquí!
                                </Text>
                            </Text>
							<Button
							onPress={this.defrente}
							style={formStyles.text}>>
								<Text>
									envia
								</Text>
							</Button>
                        </View>
					</ScrollView>
				</ImageBackground>
			</View>
		);
	}
}
const formStyles = StyleSheet.create({
	container: {
		padding: 10
	},
	subtitle: {
		color: '#fff',
		fontSize: 40,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center' 
	},
	input: {
		marginTop: 60
	},
	text:{
		marginTop: 180,
		color: '#fff'
	},
	button: {
		marginTop: 90
	}
});
