const firebase = require('firebase');
//import { API_KEY } from 'react-native-dotenv';

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAQNpwlWSkZ1-1OfVuAbgFkwYxEFsvDvrM',
	authDomain: 'yaracan-15336.firebaseapp.com',
	databaseURL: 'https://yaracan-15336.firebaseio.com',
	storageBucket: 'yaracan-15336.appspot.com'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
