import React from 'react';
import { Image } from 'react-bootstrap';
import patita from '../../Assets/Images/patita2.jpg';

const Patita = props => {
	return (
		<a href="#link1">
			<Image src={patita} width="40" height="40" roundedCircle />
		</a>
	);
};
export default Patita;
