import React, { Component } from 'react';
import { ScrollView, Image, View, Text,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from '../../screens/styles/global';

import getAvatar from '../../lib/avatar';

import IconBox from '../../components/UI/IconBox';
import Badge from '../../components/UI/Badge';
import loadingGif from '../../assets/img/loading.gif';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Profile extends Component {
	static navigationOptions = {
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-person" size={25} color={'white'} />;
		}
	};
	state = {
		avatar: '',
		userName: '',
		userEmail: ''
	};

	componentDidMount = async () => {
		const userName = await AsyncStorage.getItem('userName');
		const userEmail = await AsyncStorage.getItem('userEmail');
		this.setState({
			userName: userName,
			userEmail: userEmail,
			avatar: getAvatar(userEmail)
		});
	};
	editProfileHandler = () => {
		this.props.navigation.navigate('ProfileEdit');
	};
	gotosingin = () => {
		this.props.navigation.navigate('Auth');
	};
	render() {
		return (
			<ScrollView>
				{this.state.avatar !== '' ? (
					<Badge
						userName={this.state.userName}
						email={this.state.userEmail}
						avatar={this.state.avatar}
					/>
				) : (
					<Image source={loadingGif} />
				)}
				<View style={styles.iconContainer}>
					<IconBox
						value={'Editar'}
						label={'Modificar perfil'}
						icon={require('../../assets/img/icon-edit.png')}
						onPress={this.editProfileHandler}
					/>
				</View>
				<TouchableOpacity
							onPress={this.gotosingin}
							style={{
											marginTop: 30,
											padding: 15,
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: 25,
											backgroundColor: '#cd853f',
											width:150,
											marginLeft:100
										}}
									>
										<Text
											style={{
												color: 'white',
												fontSize: 20,
												fontWeight: 'bold'
											}}
										>
											Salir
										</Text>
						</TouchableOpacity>
			</ScrollView>
		);
	}
}

export default Profile;
