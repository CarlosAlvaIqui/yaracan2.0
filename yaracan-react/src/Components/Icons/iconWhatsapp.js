import React from 'react';
import { Image } from 'react-bootstrap';
import whatsapp from '../../recursos/icons/iconWhatssap.png';

const Whatsapp = props => {
	return (
		<a href="#link1">
			<Image src={whatsapp} width="50" height="50" roundedCircle />
		</a>
	);
};
export default Whatsapp;
