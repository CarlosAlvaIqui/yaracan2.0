import React from 'react';
import { Image } from 'react-bootstrap';
import corazon from '../../Assets/Images/corazon2.png';

const Corazon = props => {
	return (
		<a href="#link1">
			<Image src={corazon} width="40" height="40" roundedCircle />
		</a>
	);
};
export default Corazon;
