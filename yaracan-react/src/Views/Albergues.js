import React, { Component } from 'react';
import axios from '../utils/axios';
import Carspet from '../Components/CarsPet/Carspet';
import { CardGroup, Card } from 'react-bootstrap';

class Albergues extends Component {
	render() {
		return (
			<div class="container-fluid">
				<section class="mt-5">
					<Card>
						<Card.Header>
							<h2 align="center">Refugio de Huellitas en busca de Amor</h2>
						</Card.Header>
						<Card.Body>Este es el cuerpo</Card.Body>
					</Card>
				</section>
			</div>
		);
	}
}
export default Albergues;
