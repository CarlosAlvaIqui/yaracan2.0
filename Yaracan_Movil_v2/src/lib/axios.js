import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://Api-env.mwtpjjfsp2.us-west-2.elasticbeanstalk.com'
});

export default instance;
