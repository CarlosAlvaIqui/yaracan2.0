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
	Image
} from 'react-native';
import { Fumi } from 'react-native-textinput-effects';
import Icon from 'react-native-ionicons';
import { Hoshi } from 'react-native-textinput-effects';
import AwesomeButton from 'react-native-really-awesome-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import imgBackground from '../../assets/img/perritos.jpg';
import bk from '../../assets/img/dragoncito.jpg';
import axios from 'axios';

export default class SignUp extends React.Component {
	static navigationOptions = {
		title: 'Bienvenido a la App!',
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
			url: 'http://192.168.43.168:8080/api/user/signup',
			data: {
				username: this.state.username,
				password: this.state.password,
				email: this.state.email
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
		this.props.navigation.navigate('SignIn');
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={imgBackground}
					style={{ width: '100%', height: '100%' }}
				>
					<View style={styles.top}>
						<Text style={{ fontSize: 50, color: 'white' }}> Yara Can</Text>
						<View style={styles.profileimage} />
					</View>
					<View style={styles.center} />

					<View style={styles.bottom}>
						<View onPress={this.cambiaotro} style={styles.bottomItem}>
							<View style={styles.bottomItemInner}>
								<AwesomeButton>
									<Text>Adopciones Aqui</Text>
								</AwesomeButton>
							</View>
						</View>

						<View style={styles.bottomItem}>
							<View style={styles.bottomItemInner}>
								<AwesomeButton>
									<Text>Reportes</Text>
								</AwesomeButton>
							</View>
						</View>

						<View style={styles.bottomItem}>
							<View style={styles.bottomItemInner}>
								<AwesomeButton>
									<Text>Eventos</Text>
								</AwesomeButton>
							</View>
						</View>

						<View style={styles.bottomItem}>
							<View style={styles.bottomItemInner}>
								<AwesomeButton>
									<Text>Lugares</Text>
								</AwesomeButton>
							</View>
						</View>

						<View style={styles.bottomItem}>
							<View style={styles.bottomItemInner}>
								<AwesomeButton>
									<Text>Noticias</Text>
								</AwesomeButton>
							</View>
						</View>

						<View style={styles.bottomItem}>
							<View style={styles.bottomItemInner}>
								<AwesomeButton>
									<Text>Albergues</Text>
								</AwesomeButton>
							</View>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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
