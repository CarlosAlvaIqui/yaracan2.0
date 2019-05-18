import React from 'react';
import {
	View,
	Button,
	Text,
	ImageBackground,
	TouchableOpacity,
	ToastAndroid,
	KeyboardAvoidingView,
	TextInput,
	StyleSheet
} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import { Hoshi } from 'react-native-textinput-effects';

import axios from 'axios';

export default class ViewAdopcionScreen extends React.Component {
	state = {
		namepet: '',
		raza: '',
		sexo: '',
		descripcion: ''
	};
	inputHandler = (field, value) => {
		this.setState({ [field]: value });
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text>Adopciones</Text>
				<View>
					<Hoshi
						style={{
							width: '100%',
							backgroundColor: '#ffa138',
							opacity: 0.8,
							marginBottom: 10
						}}
						label={'Nombre del animal'}
						labelStyle={{ color: 'white' }}
						iconSize={30}
						iconWidth={40}
						inputPadding={16}
						onChangeText={text => this.inputHandler('nombre', text)}
						value={this.state.nombre}
					/>
					<Hoshi
						style={{
							width: '100%',
							backgroundColor: '#ffa138',
							opacity: 0.8,
							marginBottom: 10
						}}
						label={'raza'}
						labelStyle={{ color: 'white' }}
						iconSize={30}
						iconWidth={40}
						inputPadding={16}
						onChangeText={text => this.inputHandler('raza', text)}
						value={this.state.raza}
					/>
					<Hoshi
						style={{
							width: '100%',
							backgroundColor: '#ffa138',
							opacity: 0.8,
							marginBottom: 10
						}}
						label={'Sexo'}
						labelStyle={{ color: 'white' }}
						iconSize={30}
						iconWidth={40}
						inputPadding={16}
						onChangeText={text => this.inputHandler('sexo', text)}
						value={this.state.sexo}
					/>
					<Hoshi
						style={{
							width: '100%',
							backgroundColor: '#ffa138',
							opacity: 0.8,
							marginBottom: 10
						}}
						label={'Historia'}
						labelStyle={{ color: 'white' }}
						iconSize={30}
						iconWidth={40}
						inputPadding={16}
						onChangeText={text => this.inputHandler('historia', text)}
						value={this.state.historia}
					/>
				</View>
				<View style={styles.bottom}>
					<View style={styles.bottomItem}>
						<View style={styles.bottomItemInner}>
							<AwesomeButton onPress={this.change_viewAdopcion}>
								<Text>Dar en adopcion</Text>
							</AwesomeButton>
						</View>
					</View>
				</View>
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
