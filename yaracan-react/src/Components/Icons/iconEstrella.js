import React from 'react';
import { Image } from 'react-bootstrap';
import estrella from '../../Assets/Images/estrella.jpg';

const Estrella = props => {
	return (
		<a href="#link1">
			<Image src={estrella} width="40" height="40" roundedCircle />
		</a>
	);
};
export default Estrella;
