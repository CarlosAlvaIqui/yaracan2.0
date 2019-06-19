import {
	AppRegistry,
	StyleSheet,
	Image,
	View,
	TouchableOpacity,
} from 'react-native';
import { Input,Text,Icon } from 'react-native-elements';

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
			return <Ionicons name="ios-book" size={23} color={'white'} />;
		}
	};
	render() {
		return (
			<View>
				<Text
							style={{
								textAlign: 'center',
								fontWeight: 'bold',
								fontSize: 26,
								color: 'black',
								marginTop: 10
							}}
						>
							Normas y Condiciones
				</Text>
			<View style={{ flexDirection: 'row' }}>
				<Ionicons name="ios-paw" size={25} style={formStyles.text1}/>
				<Text style={formStyles.text}>
				Límite máximo de 3 casos por cuenta.Si quieres{'\n'} dar más de 3 animales
					en adopción por ser una{'\n'} camada, agrúpalos en el mismo anuncio o ponte
					{'\n'} en contacto con nosotros.
				</Text>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<Ionicons name="ios-paw" size={25} style={formStyles.text1}/>
				<Text style={formStyles.text}>
				Los particulares no pueden publicar tasa de{'\n'} adopción ni recibir donaciones
					y apadrinamientos.
				</Text>
			</View>
					
			<View style={{ flexDirection: 'row' }}>
				<Ionicons name="ios-paw" size={25} style={formStyles.text1}/>
				<Text style={formStyles.text}>
				Queda totalmente prohibida la venta, en caso de detectar indicios de ello tu
					cuenta podrá ser{'\n'}borrada El anuncio será validado antes  de que{'\n'}sea visible alos 
					posibles adoptantes.
				</Text>
			</View>	

			<View style={{ flexDirection: 'row' }}>
				<Ionicons name="ios-paw" size={25} style={formStyles.text1}/>
				<Text style={formStyles.text}>
				En caso de incumplir nuestras políticas de {'\n'}publicación, será eliminado. El proceso
					de{'\n'}validación puede durar hasta 24 horas.
				</Text>
			</View>		
				
			</View>
		);
	}
}
const formStyles = StyleSheet.create({
	text: {
		marginTop:20,
		color:'#191919',
		fontSize: 15,
		fontWeight: 'bold'

	},
	text1: {
		marginTop:20,
		
	},

});

export default Appxd;
