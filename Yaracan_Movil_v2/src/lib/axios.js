import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://192.168.0.10:8080'
});

export default instance;
