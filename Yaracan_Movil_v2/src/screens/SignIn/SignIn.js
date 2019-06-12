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
import imgBackground from '../../assets/img/perritos.jpg';
import Icon from 'react-native-ionicons';
import axios from '../../lib/axios';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../styles/global';
export default class SignInScreen extends React.Component {
	static navigationOptions = {
		title: 'Inicie sesion',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-contact" size={25} color={tintColor} />;
		}
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
				console.log('-----------------------> Logeo Existo');
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
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={imgBackground}
					style={{ width: '100%', height: '100%' }}
				>
					<ScrollView style={formStyles.container}>
						<Text style={styles.subtitle}>Yara Can</Text>
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
							inputContainerStyle="marginTop: 10"
							value={this.state.password}
							onChangeText={text => this.inputHandler(text, 'password')}
						/>
						<Button
							title="Iniciar Sesion"
							containerStyle={formStyles.button}
							onPress={this.onSubmitHandler}
						/>
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
	input: {
		marginTop: 10
	},
	button: {
		marginTop: 10
	}
});
