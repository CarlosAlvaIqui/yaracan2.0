import React from 'react';
import { View, Button, Text, ImageBackground, TouchableOpacity,ToastAndroid,KeyboardAvoidingView} from 'react-native';
import { Fumi } from 'react-native-textinput-effects';
import Icon from 'react-native-ionicons';
import { Hoshi } from 'react-native-textinput-effects';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import imgBackground from '../../assets/img/perritos.jpg'



export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Bienvenido a la App!',
        tabBarIcon:({ focused, horizontal, tintColor})=> {
            return <Ionicons name="ios-clipboard" size={25} color={tintColor} />
        }
    };
    state ={
        user: '',
        password: '',
        loading: false,
        showPassword: false
    };
    showPassword = () =>{
        this.setState({ showPassword: !this.state.showPassword});
    }
    inputHandler = (field,value) =>{
        this.setState({[field]:value})
    }
    _scrollToInput = () => {
        const scrollResponder = this.refs.myScrollView.getScrollResponder();
        const inputHandle = React.findNodeHandle(this.refs.myInput)
      
        scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
          inputHandle, // The TextInput node handle
          0, // The scroll view's bottom "contentInset" (default 0)
          true // Prevent negative scrolling
        );
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
            url: 'api/user/signin',
            data:{
                usernmae:this.state.user,
                password: this.state.password
            }
        })
            
            .catch(err => {
                ToastAndroid.showWithGravity(
                    'Hubo un error en el registro',
                    ToastAndroid.LONG,
                    ToastAndroid.TOP
                );
                console.warn(err);
                this.setState({loading:false});
            });
    };
    _showMoreApp = () => {
        this.props.navigation.navigate('chat');
    };
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    render(){
        return(
            <View style={{flex: 1}}>
                <Button title="Mejor, cierra sesion :)" onPress={this._signOutAsync}/>
                <ImageBackground
                    source = {imgBackground}
                    style={{width: '100%', height: '100%'}}
                    >
                    
                    <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 26,
                        color: '#fff'
                    }}
                >Registroz</Text>
                <View style={{padding:5}}>
                    <View style={{marginTop:5}}>
                        <View>
                        <Hoshi style={{
                            width: '100%',
                            backgroundColor: '#ffa138',
                            opacity: 0.8,
                            marginBottom: 10
                            }}
                            label={'Usuario'}
                            iconClass={Icon}
                            iconName={'person'}
                            iconColor={'#fff'}
                            labelStyle={{color: 'white'}}
                            iconSize={30}
                            iconWidth={40}
                            inputPadding={16}
                        />
                        <Hoshi style={{
                            width: '100%',
                            backgroundColor: '#ffa138',
                            opacity: 0.8,
                            marginBottom: 10
                            }}
                            label={'Correos'}
                            iconClass={Icon}
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
                            width: '100%',
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
                        
                       </View>
                       <View style={{flexDirection:'row'}}>
                        <Hoshi style={{
                            marginTop: 10,
                            width: '100%',
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
                       </View>
                        <TouchableOpacity
                            onPress={this.onSubmitHandler}
                            style={{
                                marginTop: 10,
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
                    
                    </View>
                </View>
                </ImageBackground>
            </View>  
        );
    }
}