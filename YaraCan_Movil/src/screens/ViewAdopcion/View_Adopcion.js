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
	AppRegistry,
	Platform
} from 'react-native';
import Icon from 'react-native-ionicons';
import { Madoka } from 'react-native-textinput-effects';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import imgBackground from '../../assets/img/perritos.jpg';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';

export default class View_Adopcion extends React.Component {
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
		loading: false,
		avatarSource: null
	};
	constructor(props) {
		super(props);

		this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
	}

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
	selectPhotoTapped() {
		const options = {
			quality: 1.0,
			maxWidth: 500,
			maxHeight: 500,
			storageOptions: {
				skipBackup: true
			}
		};

		ImagePicker.showImagePicker(options, response => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled photo picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				let source = { uri: response.uri };
				// You can also display the image using data:
				//let source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					avatarSource: source
				});
				console.log(source);
			}
		});
	}

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
	mostrarAlerta = () => {
		console.log(this.state.avatarSource);
	};
	//este es tu codigo  chullito desde la linea 86 hasta 210

	render() {
		// asociamos el manejador de eventos sobre el INPUT FILE

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
									Publicar
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
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
									Subir foto
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={this.selectPhotoTapped.bind(this)}
								style={{
									marginTop: 10,
									padding: 15,
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: 25,
									backgroundColor: '#dcdcdc'
								}}
							>
								<View
									style={[
										styles.avatar,
										styles.avatarContainer,
										{ marginBottom: 20 }
									]}
								>
									{this.state.avatarSource === null ? (
										<Text>Selecciona una Foto</Text>
									) : (
										<Image
											style={styles.avatar}
											source={this.state.avatarSource}
										/>
									)}
								</View>
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
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	avatarContainer: {
		borderColor: '#9B9B9B',
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatar: {
		width: 150,
		height: 150
	}
});
