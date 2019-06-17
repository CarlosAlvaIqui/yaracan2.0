import {
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	View,
	TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import { NavigationBar } from 'navigationbar-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ComponentLeft = () => {
	return (
		<View style={{ flex: 1, alignItems: 'flex-start' }}>
			<TouchableOpacity
				style={{ justifyContent: 'center', flexDirection: 'row' }}
			>
				<Text style={{ color: 'white' }}>Back Home</Text>
			</TouchableOpacity>
		</View>
	);
};

const ComponentCenter = () => {
	return (
		<View style={{ flex: 1 }}>
			<Text style={{ color: 'white' }}>Back Home</Text>
		</View>
	);
};

const ComponentRight = () => {
	return (
		<View style={{ flex: 1, alignItems: 'flex-end' }}>
			<TouchableOpacity>
				<Text style={{ color: 'white' }}> Right </Text>
			</TouchableOpacity>
		</View>
	);
};
const ComponentRights = () => {
	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity>
				<Text style={{ color: 'white' }}> Right1 </Text>
			</TouchableOpacity>
		</View>
	);
};

class Appxd extends React.Component {
	static navigationOptions = {
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-paper" size={25} color={tintColor} />;
		}
	};
	render() {
		return (
			<View>
				<Text>
					{' '}
					Límite máximo de 3 casos por cuenta. Si quieres dar más de 3 animales
					en adopción por ser una camada, agrúpalos en el mismo anuncio o ponte
					en contacto con nosotros. Los particulares no pueden publicar tasa de
					adopción ni recibir donaciones y apadrinamientos. Queda totalmente
					prohibida la venta, en caso de detectar indicios de ello tu cuenta
					podrá ser borrada. El anuncio será validado antes de que sea visible a
					los posibles adoptantes. En caso de incumplir nuestras políticas de
					publicación, será eliminado. El proceso de validación puede durar
					hasta 24 horas.{' '}
				</Text>
			</View>
		);
	}
}
export default Appxd;
