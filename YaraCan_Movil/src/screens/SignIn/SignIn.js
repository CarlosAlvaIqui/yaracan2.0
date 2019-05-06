import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity,ToastAndroid,KeyboardAvoidingView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fumi, Hoshi } from 'react-native-textinput-effects';

import imgBackground from '../../assets/img/perritos.jpg'
import Icon from 'react-native-ionicons';
import axios from '../../lib/axios';
import AsyncStorage from '@react-native-community/async-storage';
//import console = require('console');

export default class SignInScreen extends React.Component{
    static navigationOptions = {
        title: 'Inicie sesion',
        tabBarIcon: ({ focused, horizontal, tintColor}) => {
            return <Ionicons name="ios-contact" size={25} color={tintColor} />;
        }
    };
    state ={
        user: '',
        password: '',
        loading: false,
        showPassword: false
    };//Variables globales de la app
    showPassword = () =>{
        this.setState({ showPassword: !this.state.showPassword});
    }
    inputHandler = (field,value) =>{
        this.setState({[field]:value})
    }
    onSubmitHandler = () =>{
        if(this.state.user === '' || this.state.password === ''){
            return ToastAndroid.showWithGravity(
                'Falta ingresar datos!',
                ToastAndroid.SHORT,
                ToastAndroid.TOP
            );
        }
        this.setState({ loading:true});
        axios({
            method: 'POST',
            url: '/api/user/signin',
            data:{
                username:this.state.user,
                password: this.state.password
            }
        })
            .then(async response =>{
                ToastAndroid.showWithGravity(
                    response.data.message,
                    ToastAndroid.LONG,
                    ToastAndroid.TOP
                );
                this.props.navigation.navigate('Home');
                await AsyncStorage.setItem('userToken', response.data.token);
                
            })
            .catch(err => {
                ToastAndroid.showWithGravity(
                    'Hubo un error en el logeo',
                    ToastAndroid.LONG,
                    ToastAndroid.TOP
                );
                console.warn(err);
                this.setState({loading:false});
            });
    };
    registerHandler = () =>{
        this.props.navigation.navigate('SignUp');//para cambiar de vista
    }


    //Todo lo que esta arrbia son funciones -> jose
    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground
                    source = {imgBackground}
                    style={{width: '100%', height: '100%'}}
                    >
                <KeyboardAvoidingView
                    behavior="position"
                    style={{ justifyContent: 'center'}}
                    enabled
                >
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 48,
                        color: '#fff'
                    }}
                >Yara Can</Text>
                <View style={{padding:10}}>
                    <View style={{marginTop:10}}>
                        <View>
                        <Hoshi style={{
                            width: '100%',
                            backgroundColor: '#ffa138',
                            opacity: 0.8,
                            marginBottom: 10
                            }}
                            label={'Usuario'}
                            iconClass={Icon}
                            keyboardType="email-address"
                            onChangeText={text => this.inputHandler('user',text)}
                            value={this.state.user}
                            iconName={'person'}
                            iconColor={'#fff'}
                            labelStyle={{color: 'white'}}
                            iconSize={30}
                            iconWidth={40}
                            inputPadding={16}
                        />
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Hoshi style={{
                            width: '82.5%',
                            backgroundColor: '#ffa138',
                            opacity: 0.8
                            }}
                            label={'Contraseña'}
                            labelStyle={{color: 'white'}}
                            onChangeText={text => this.inputHandler('password',text)}
                            value={this.state.password}
                            secureTextEntry={!this.state.showPassword}
                            iconClass={Icon}
                            iconName={'key'}
                            iconColor={'#fff'}
                            
                            iconSize={30}
                            iconWidth={40}
                            inputPadding={16}
                        />
                        <Icon
                            color= '#fff'
                            style={{
                                padding: 20,
                                alignItems: 'center',
                                backgroundColor: '#ffa138',
                                opacity: 0.8,
                                height: 65
                            }}
                            size={25}
                            name={this.state.showPassword ? 'md-eye' : 'md-eye-off'}
                            onPress={this.showPassword}
                        />
                        </View>
                        <TouchableOpacity
                            onPress={this.onSubmitHandler}
                            style={{
                                marginTop: 20,
                                padding: 15,
                                justifyContent: 'center',
                                alignItems:'center',
                                borderRadius: 25,
                                backgroundColor: '#dcdcdc'
                            }}
                        >
                        <Text
                            style={{
                                color: '#46494f',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>
                        Iniciar Sesión
                        </Text>

                        </TouchableOpacity>
                        <View
                            style={{
                                marginTop:10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center' 
                            }}>
                            <Text style={{ color: '#fff', fontSize: 14}}>
                                No tienes una cuenta?
                                <Text
                                    onPress={this.registerHandler}
                                    style={{
                                        color: '#fff',
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    }}
                                >
                                {''}
                                    Registrarse aquí!
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
                
                </KeyboardAvoidingView>
                </ImageBackground>
            </View>
            )
    }
}