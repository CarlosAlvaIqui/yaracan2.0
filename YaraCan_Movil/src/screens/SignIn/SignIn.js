import React from 'react';
import { View, Text, ImageBackground, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fumi } from 'react-native-textinput-effects';

import imgBackground from '../../assets/img/sala-cine.jpg'
export default class SignInScreen extends React.Component{
    static navigationOptions = {
        title: 'Inicie sesion',
        tabBarIcon:({ focused, horizontal, tintColor})=> {
            return <Ionicons name="ios-clipboard" size={25} color={tintColor} />
        }
    };
    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground
                    source = {imgBackground}
                    style={{width: '100%', height: '100%'}}
                    >
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 48,
                        color: '#fff'
                    }}
                >Tecsup Videos</Text>
                <Fumi style={{
                    backgroundColor: '#46494f',
                    opacity: 0.8,
                    marginBottom: 10
                }}
                label={'Usuario'}
                iconClass = {Icon}
                keyboardType="email-anddress"
                iconName={'person'}
                iconColor={'#fff'}
                labelStyle={{color: 'white'}}
                iconSize={30}
                iconWidth={40}
                inputPadding={16}
                />
                </ImageBackground>
            </View>
            )
    }
}