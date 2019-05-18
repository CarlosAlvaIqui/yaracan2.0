import React from 'react';
import {
	StyleSheet,
	View,
	Button,
	Text,
	ImageBackground,
	TouchableOpacity,
	ToastAndroid,
	KeyboardAvoidingView,
	Image,
	FlatList,
	AppRegistry
} from 'react-native';
import { Fumi } from 'react-native-textinput-effects';
import Icon from 'react-native-ionicons';
import { Hoshi } from 'react-native-textinput-effects';
import { Madoka } from 'react-native-textinput-effects';

import { Jiro } from 'react-native-textinput-effects';

import { Sae } from 'react-native-textinput-effects';
import AwesomeButton from 'react-native-really-awesome-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import imgBackground from '../../assets/img/perritos.jpg';
import bk from '../../assets/img/dragoncito.jpg';
import arcjson from '../../archivos_json/json_files/jsonfile_1.json';
import axios from 'axios';

export default class SignUp extends React.Component {
	static navigationOptions = {
		title: 'Bienvenido a la App!',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-clipboard" size={25} color={tintColor} />;
		}
	};

	state = {
		petname: '',
		sexo: '',
		raza: '',
		descripcion: '',
		loading: false
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
		/*if(this.state.user === '' || this.state.password === ''){
            return ToastAndroid.showWithGravity(
                'Falta ingresar datos!',
                ToastAndroid.SHORT,
                ToastAndroid.TOP
            );
        }
    */
		this.setState({ loading: true });
		axios({
			method: 'POST',
			url: 'http://192.168.0.12:8080/api/pet/',
			data: {
				petname: this.state.petname,
				sexo: this.state.sexo,
				raza: this.state.raza,
				descripcion: this.state.descripcion
			}
		}).catch(err => {
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
				<ImageBackground
					source={imgBackground}
					style={{ width: '100%', height: '100%' }}
				>
					<Text
						style={{
							textAlign: 'center',
							fontWeight: 'bold',
							fontSize: 26,
							color: '#fff'
						}}
					>
						Registros
					</Text>
					<View style={{ padding: 5 }}>
						<View style={{ marginTop: 5 }}>
							<View>
								<Madoka
									style={{
										width: '100%',
										opacity: 0.8,
										marginBottom: 10
									}}
									label={'Nombre de la mascota'}
									iconClass={Icon}
									iconColor={'#fff'}
									onChangeText={text => this.inputHandler('petname', text)}
									labelStyle={{ color: 'white' }}
									iconSize={30}
									iconWidth={40}
									inputPadding={16}
									value={this.state.petname}
								/>
								<Madoka
									style={{
										width: '100%',
										opacity: 0.8,
										marginBottom: 10
									}}
									label={'Sexo'}
									iconClass={Icon}
									iconName={'person'}
									iconColor={'#fff'}
									onChangeText={text => this.inputHandler('sexo', text)}
									labelStyle={{ color: 'white' }}
									iconSize={30}
									iconWidth={40}
									inputPadding={16}
									value={this.state.sexo}
								/>
							</View>
							<View style={{ flexDirection: 'row' }}>
								<Madoka
									style={{
										width: '100%',
										opacity: 0.8
									}}
									label={'Raza'}
									labelStyle={{ color: 'white' }}
									onChangeText={text => this.inputHandler('raza', text)}
									iconClass={Icon}
									iconName={'key'}
									iconColor={'#fff'}
									iconSize={30}
									iconWidth={40}
									inputPadding={16}
									value={this.state.raza}
								/>
							</View>
							<View style={{ flexDirection: 'row' }}>
								<Madoka
									style={{
										marginTop: 10,
										width: '100%',
										opacity: 0.8
									}}
									label={'Descripcion'}
									labelStyle={{ color: 'white' }}
									onChangeText={text => this.inputHandler('descripcion', text)}
									iconClass={Icon}
									iconName={'key'}
									iconColor={'#fff'}
									iconSize={30}
									iconWidth={40}
									inputPadding={16}
									value={this.state.descripcion}
								/>
							</View>
							<TouchableOpacity
								onPress={this.onSubmitHandler}
								style={{
									marginTop: 10,
									padding: 15,
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: 25,
									backgroundColor: '#dcdcdc'
								}}
							>
								<Text
									style={{
										color: '#46494f',
										fontSize: 15,
										fontWeight: 'bold'
									}}
								>
									Registrarse
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
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
