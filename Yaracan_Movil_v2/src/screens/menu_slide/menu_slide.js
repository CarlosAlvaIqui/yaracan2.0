/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
	createSwitchNavigator,
	createDrawerNavigator,
	createAppContainer,
	createBottomTabNavigator
} from 'react-navigation';

import React, { Component } from 'react';

import SignUpScreen from '../SignUp/SignUp';
import View_adop from '../ViewAdopcion/View_Adopcion';



const Midrawer = createDrawerNavigator({
	Signu: {
		screen: SignUpScreen},
	Adop1: {
		screen: SignUpScreen
	},
	Adop2: {
		screen: View_adop
	},
	Adop3: {
		screen: View_adop
	},
	Adop4: {
		screen: View_adop
	},
});

const Appss = createAppContainer(Midrawer);
export default Appss;