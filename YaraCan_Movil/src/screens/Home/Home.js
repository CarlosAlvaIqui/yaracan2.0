import React from 'react';
import { View, Button, Text, ImageBackground, TouchableOpacity,ToastAndroid,KeyboardAvoidingView} from 'react-native';
import { Fumi } from 'react-native-textinput-effects';
import Icon from 'react-native-ionicons';
import { Hoshi } from 'react-native-textinput-effects';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import imgBackground from '../../assets/img/perritos.jpg';



export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Bienvenido a la App!',
        tabBarIcon:({ focused, horizontal, tintColor})=> {
            return <Ionicons name="ios-clipboard" size={25} color={tintColor} />
        }
    };
    state ={
    };
    render(){
       return(<Text>Inicio sesion exitoso</Text>);
    };
}