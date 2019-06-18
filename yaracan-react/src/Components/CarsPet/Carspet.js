import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import dog from '../../Assets/Images/dog.jpg';
import Patita from '../../Components/Icons/iconPatita';
import Corazon from '../../Components/Icons/iconCorazon';
import Estrella from '../../Components/Icons/iconEstrella';

class CarsPet extends Component {
	state = {
		name: this.props.name,
		sexo: this.props.sexo,
		raza: this.props.raza,
		descripcion: this.props.descripcion,
		url: this.props.url,
		_id: this.props._id
	};
	render() {
		return (
			<div class="col-lg-2 col-md-6 col-sm-6 col-xs-12">
				<div class="row  mt-2 mb-2">
					<div class="col-12">
						<Card style={{ padding: 0 }}>
							<Card.Header>
								<Card.Title>
									<h5 align="center" style={{ fontFamily: 'Comic Sans MS' }}>
										{this.state.name}
									</h5>
								</Card.Title>
							</Card.Header>
							<Card.Img variant="top" src={dog} height="200" />
							<Card.Body>
								{/* <Card.Text>{this.state.descripcion}</Card.Text> */}
								<div class="row mb-1">
									<Patita />
									<Corazon />
									<Estrella />
								</div>
								<div class="row">
									<Button
										variant="success"
										block
										href={'/info/' + this.state._id}
									>
										Mirame amigo
									</Button>
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		);
	}
}

export default CarsPet;
