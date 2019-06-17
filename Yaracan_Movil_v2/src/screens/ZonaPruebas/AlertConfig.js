import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends Component {
	buttonClickded = () => {
		Alert.alert(
			'Alert Title',
			'Alert Msg',
			[
				{ text: 'Later', onPress: () => console.log('later pressed') },
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{ text: 'OK', onPress: () => console.log('OK Pressed') }
			],
			{ cancelable: false }
		);
	};
	render() {
		return (
			<View style={styles.container}>
				<Button onPress={this.buttonClickded} title="Click Me" />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});
