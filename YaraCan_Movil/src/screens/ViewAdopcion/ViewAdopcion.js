import React from 'react';
import {
	View,
	Button,
	Text,
	ImageBackground,
	TouchableOpacity,
	ToastAndroid,
	KeyboardAvoidingView
} from 'react-native';
import { Fumi } from 'react-native-textinput-effects';
import Icon from 'react-native-ionicons';
import { Hoshi } from 'react-native-textinput-effects';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import imgBackground from '../../assets/img/perritos.jpg';

import axios from 'axios';

export default class ViewAdopcionScreen extends React.Component {
	render() {
		return <Text>Estas en la vista de adopcion</Text>;
	}
}
