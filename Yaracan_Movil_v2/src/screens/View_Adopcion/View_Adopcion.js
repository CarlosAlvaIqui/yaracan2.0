import React, { Fragment } from 'react';
import {
	StyleSheet,
	View,
	Button,
	Text,
	ImageBackground,
	TouchableOpacity,
	ToastAndroid,
	Image,
	Platform,
	ScrollView,
	ActivityIndicator
} from 'react-native';
import Icon from 'react-native-ionicons';
import { Madoka } from 'react-native-textinput-effects';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import imgBackground from '../../assets/img/perritos.jpg';
import axios from '../../lib/axios';
import { Input } from 'react-native-elements';
import FirebaseClient from '../../lib/FirebaseClient';
import RNFetchBlob from 'react-native-fetch-blob';

var ImagePicker = require('react-native-image-picker');

var options = {
	title: 'Select Avatar',
	customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
};

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

export default class View_Adopcion extends React.Component {
	static navigationOptions = {
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-paw" size={25} color={'white'} />;
		}
	};
	constructor() {
		super();
		this.getImage = this.getImage.bind(this);
		this.state = {
			sourceImagePet:
				'https://avatars0.githubusercontent.com/u/12028011?v=3&s=200'
		};
	}
	state = {
		petname: '',
		sexo: '',
		raza: '',
		descripcion: '',
		loading: false,
		avatarSource: null,
		sourceImagePet: '',
		urlImagePet: '',
		userName: '',
		userEmail: ''
	};
	componentDidMount = async () => {
		const userName = await AsyncStorage.getItem('userName');
		const userEmail = await AsyncStorage.getItem('userEmail');
		this.setState({
			userName: userName,
			userEmail: userEmail
		});
	};
	makeid(length) {
		var result = '';
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	uploadImage(uri, mime = 'application/octet-stream') {
		return new Promise((resolve, reject) => {
			const uploadUri =
				Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
			let uploadBlob = null;
			let r = this.makeid(16);
			const imageRef = FirebaseClient.storage()
				.ref('imagen')
				.child(r + '.jpg');

			fs.readFile(uploadUri, 'base64')
				.then(data => {
					return Blob.build(data, { type: `${mime};BASE64` });
				})
				.then(blob => {
					uploadBlob = blob;
					return imageRef.put(blob, { contentType: mime });
				})
				.then(() => {
					uploadBlob.close();
					return imageRef.getDownloadURL();
				})
				.then(url => {
					resolve(url);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	getImage() {
		ImagePicker.showImagePicker(options, response => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				// let source = { uri: response.uri };
				this.setState({ sourceImagePet: response.uri });
			}
		});
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
		this.uploadImage(this.state.sourceImagePet)
			.then(url => {
				alert('Registro cargado con exito');
				this.setState({ urlImagePet: url });
				console.log('>>>>>>>>>>>>>>>>>>>>' + this.state.urlImagePet);
			})
			.then(() => {
				//para subirlo al mongo db
				axios({
					method: 'POST',
					url: 'api/pet/',
					data: {
						petname: this.state.petname,
						sexo: this.state.sexo,
						raza: this.state.raza,
						descripcion: this.state.descripcion,
						urlImage: this.state.urlImagePet,
						user_id: 1
					}
				})
					.then(() => {
						console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<' + this.state.urlImagePet);
					})
					.catch(err => {
						ToastAndroid.showWithGravity(
							'Hubo un problema con el registro',
							ToastAndroid.LONG,
							ToastAndroid.TOP
						);
						console.warn(err);
						this.setState({ loading: false });
					});
			})
			.catch(error => console.log(error));
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

	render() {
		// asociamos el manejador de eventos sobre el INPUT FILE

		return (
			<View style={{ flex: 1 }}>
				<ImageBackground
					style={{ width: '100%', height: '100%', color: 'black' }}
				>
					<ScrollView>
						<Text
							style={{
								textAlign: 'center',
								fontWeight: 'bold',
								fontSize: 26,
								color: 'black',
								marginTop: 10
							}}
						>
							Registros
						</Text>
						<View style={styles.card}>
							<View style={{ padding: 5 }}>
								<View style={{ marginTop: 5 }}>
									<View>
										<Input
											placeholder="Nombre de mascota"
											leftIcon={{ type: 'material', name: 'pets' }}
											inputContainerStyle={formStyles.input}
											value={this.state.petname}
											onChangeText={text => this.inputHandler('petname', text)}
										/>
										<Input
											placeholder="Sexo"
											leftIcon={{ type: 'material', name: 'pets' }}
											inputContainerStyle={formStyles.input}
											value={this.state.sexo}
											onChangeText={text => this.inputHandler('sexo', text)}
										/>
										<Input
											placeholder="Raza"
											leftIcon={{ type: 'material', name: 'pets' }}
											inputContainerStyle={formStyles.input}
											value={this.state.raza}
											onChangeText={text => this.inputHandler('raza', text)}
										/>
										<Input
											placeholder="Descripcion"
											leftIcon={{ type: 'material', name: 'pets' }}
											inputContainerStyle={formStyles.input}
											value={this.state.descripcion}
											onChangeText={text =>
												this.inputHandler('descripcion', text)
											}
										/>
									</View>

									<TouchableOpacity
										onPress={this.getImage}
										style={{
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<Text
											style={{
												textAlign: 'center',
												fontWeight: 'bold',
												fontSize: 20,
												color: 'black'
											}}
										>
											Imagen de la mascota
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											justifyContent: 'center',
											alignItems: 'center',
											backgroundColor: 'white'
										}}
									>
										<Image
											style={{
												width: 100,
												height: 100,
												justifyContent: 'center',
												alignItems: 'center'
											}}
											source={{ uri: this.state.sourceImagePet }}
										/>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={this.onSubmitHandler}
										style={{
											marginTop: 10,
											padding: 15,
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: 25,
											backgroundColor: '#cd853f',
											width: 150,
											marginLeft: 100
										}}
									>
										<Text
											style={{
												color: 'white',
												fontSize: 20,
												fontWeight: 'bold'
											}}
										>
											Publicar
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</ScrollView>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	card: {
		shadowColor: '#00000021',
		shadowOffset: {
			width: 2
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		marginVertical: 8,
		backgroundColor: 'white'
	}
});
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
