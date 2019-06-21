import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://api-env.mwtpjjfsp2.us-west-2.elasticbeanstalk.com'
});

export default instance;
/*192.168.43.168 */
