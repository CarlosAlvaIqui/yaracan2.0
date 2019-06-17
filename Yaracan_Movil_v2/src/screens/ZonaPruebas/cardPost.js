import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Alert,
	ScrollView,
	FlatList,
	Button,
	ToastAndroid
} from 'react-native';
import axios from '../../lib/axios';
import AsyncStorage from '@react-native-community/async-storage';
import { formatTestResults } from '@jest/test-result';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Posts extends Component {
	static navigationOptions = {
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-notifications" size={25} color={tintColor} />;
		}
	};
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			betaData: [],
			value: [],
			webViewLoaded: true
		};
	}
	componentDidMount = async () => {
		this.forceUpdate();
		const userName = await AsyncStorage.getItem('userName');
		const userEmail = await AsyncStorage.getItem('userEmail');
		this.setState({
			userName: userName,
			userEmail: userEmail
		});
		axios({
			method: 'GET',
			url: 'api/pet/'
		})
			.then(async response => {
				console.log(
					'<><>>>>>>>>' +
						response.data.data[0]['subData']['userPost'][0]['userName']
				);
				for (var i = 0; i < response.data.count; i++) {
					this.state.data.push({
						id: i,
						title: '' + response.data.data[i]['subData']['descripcion'],
						image: '' + response.data.data[i]['subData']['urlImage'],
						time: '' + response.data.data[i]['subData']['createdAt'],
						userName:
							response.data.data[i]['subData']['userPost'][0]['userName'],
						email: response.data.data[i]['subData']['userPost'][0]['emailUser']
					});
				}
				this.setState({ webViewLoaded: false });
			})
			.catch(err => {
				ToastAndroid.showWithGravity(
					'Hubo un error en la solicitud',
					ToastAndroid.LONG,
					ToastAndroid.TOP
				);
				console.log('' + err);
				this.setState({ loading: false });
			});
	};
	render() {
		return (
			<View style={styles.container}>
				{this.state.webviewLoaded ? (
					<Text style={styles.title}>Cargando</Text>
				) : (
					<FlatList
						style={styles.list}
						data={this.state.data}
						keyExtractor={item => {
							return item.id;
						}}
						ItemSeparatorComponent={() => {
							return <View style={styles.separator} />;
						}}
						renderItem={post => {
							const item = post.item;
							return (
								<View style={styles.card}>
									<View style={styles.cardHeader}>
										<View
											onStartShouldSetResponder={() =>
												Alert.alert(
													'Dueño de la mascota: ' + item.userName,
													'Descripcion: ' +
														item.title +
														'\n\nTelefono: ' +
														'\n\nEmail: ' +
														item.email,
													[
														{
															text: 'Enviar mensaje',
															onPress: () => console.log('later pressed')
														},
														{
															text: 'Cancel',
															onPress: () => console.log('Cancel Pressed'),
															style: 'cancel'
														},
														{
															text: 'OK',
															onPress: () => console.log('OK Pressed')
														}
													],
													{ cancelable: false }
												)
											}
										>
											<Text style={styles.title}>{item.userName}</Text>
											<Text style={styles.time}>{item.title}</Text>
										</View>
									</View>

									<Image
										style={styles.cardImage}
										source={{ uri: item.image }}
									/>

									<View style={styles.cardFooter}>
										<View style={styles.socialBarContainer}>
											<View style={styles.socialBarSection}>
												<TouchableOpacity style={styles.socialBarButton}>
													<Image
														style={styles.icon}
														source={{
															uri:
																'https://png.icons8.com/android/75/e74c3c/hearts.png'
														}}
													/>
													<Text style={styles.socialBarLabel}>78</Text>
												</TouchableOpacity>
											</View>
											<View style={styles.socialBarSection}>
												<TouchableOpacity style={styles.socialBarButton}>
													<Image
														style={styles.icon}
														source={{
															uri:
																'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png'
														}}
													/>
													<Text style={styles.socialBarLabel}>25</Text>
												</TouchableOpacity>
											</View>
											<View style={styles.socialBarSection}>
												<TouchableOpacity style={styles.socialBarButton}>
													<Image
														style={styles.icon}
														source={{
															uri:
																'https://png.icons8.com/metro/75/3498db/administrator-male.png'
														}}
													/>
													<Text
														rkType="primary4 hintColor"
														style={styles.socialBarLabel}
													>
														13
													</Text>
												</TouchableOpacity>
											</View>
										</View>
									</View>
								</View>
							);
						}}
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20
	},
	list: {
		paddingHorizontal: 17,
		backgroundColor: '#E6E6E6'
	},
	separator: {
		marginTop: 10
	},
	/******** card **************/
	card: {
		shadowColor: '#00000021',
		shadowOffset: {
			width: 2
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		marginVertical: 8,
		backgroundColor: 'white'
	},
	cardHeader: {
		paddingVertical: 17,
		paddingHorizontal: 16,
		borderTopLeftRadius: 1,
		borderTopRightRadius: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	cardContent: {
		paddingVertical: 12.5,
		paddingHorizontal: 16
	},
	cardFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 12.5,
		paddingBottom: 25,
		paddingHorizontal: 16,
		borderBottomLeftRadius: 1,
		borderBottomRightRadius: 1
	},
	cardImage: {
		flex: 1,
		height: 500,
		width: null
	},
	/******** card components **************/
	title: {
		fontSize: 18,
		flex: 1
	},
	time: {
		fontSize: 13,
		color: '#808080',
		marginTop: 5
	},
	icon: {
		width: 25,
		height: 25
	},
	/******** social bar ******************/
	socialBarContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flex: 1
	},
	socialBarSection: {
		justifyContent: 'center',
		flexDirection: 'row',
		flex: 1
	},
	socialBarlabel: {
		marginLeft: 8,
		alignSelf: 'flex-end',
		justifyContent: 'center'
	},
	socialBarButton: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
