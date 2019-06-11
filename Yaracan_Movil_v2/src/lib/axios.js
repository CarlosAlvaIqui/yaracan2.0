import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://172.23.15.232:8080'
});

export default instance;
