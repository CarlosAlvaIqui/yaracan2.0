import React, { Component } from 'react';
import { Image, Card, Button } from 'react-bootstrap';
import axios from '../utils/axios';
import dog from '../Assets/Images/dog.jpg';

class Inforpet extends Component {
	state = {
		id: this.props.match.params.id,
		name: 'lozamo',
		sexo: '',
		raza: '',
		descripcion: '',
		url: '',
		fecha_inicio: ''
	};
	componentDidMount = () => {
		axios({
			method: 'GET',
			url: 'pet/' + this.state.id
		})
			.then(response => {
				console.log(this.state.id);
				console.log(response.data.data);
				this.datosHandler(response.data.data);
				console.log(this.state.name);
			})
			.catch(error => {
				console.log('HUBO ERROR : ', error);
			});
		//console.log(this.state.name);
		//Nofuncionaraase ejecuta antes que THEN DE aai¿zios
	};

	datosHandler = recibido => {
		this.setState({
			name: recibido.petname,
			sexo: recibido.sexo,
			raza: recibido.raza,
			descripcion: recibido.descripcion,
			fecha_inicio: recibido.createdAt
			// url: recibido.urlImage
		});
	};
	render() {
		console.log(this.state.name);
		return (
			<div class="container-fluid">
				<section>
					<div class="row mt-5 mb-2">
						<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-2">
							<div align="center">
								<Image src={dog} height="300" rounded />
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-2">
							<Card style={{ height: '300px' }}>
								<Card.Header>Informacion</Card.Header>
								<Card.Body>
									<li>
										<label>Sexo : {this.state.sexo}</label>
									</li>
									<li>
										<label>Raza : {this.state.raza}</label>
									</li>
									<li>
										<label>Fecha : {this.state.fecha_inicio}</label>
									</li>
								</Card.Body>
							</Card>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-2">
							<Card style={{ height: '300px' }}>
								<Card.Header>Descripcion</Card.Header>
								<Card.Body>{this.state.descripcion}</Card.Body>
							</Card>
						</div>
						<div class="col-lg-2 col-md-6 col-sm-6 col-xs-12 mb-2">
							<div class="row justify-content-center">
								<div class="col-12">
									<Button block>Facebook</Button>
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-12 mt-2 mb-2">
									<Button variant="success" block>
										Whatssap
									</Button>
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-12 mt-2 mb-2">
									<Button variant="danger" block>
										Gmail
									</Button>
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-12 mt-2 mb-2">
									<Button variant="warning" block>
										Informacion del usuario
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>
				<hr />
				<section>
					<div class="row justify-content-center mb-3">
						<div align="center">
							<h1 style={{ color: 'black' }}>Tenemos animales</h1>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-10">
							<p
								style={{
									color: 'black',
									fontFamily: 'Comic Sans MS',
									fontSize: '20px',
									textAlign: 'justify'
								}}
							>
								Gymnasia apparatus such as barbells, parallel bars, jumping
								board, running path, tennis-balls, cricket field, and fencing
								area are used as exercises. In safe weather, outdoor locations
								are the most conducive to health.[2] Gyms were popular in
								ancient Greece. Their curricula included Gymnastica militaria or
								self-defense, gymnastica medica, or physical therapy to help the
								sick and injured, and gymnastica athletica for physical fitness
								and sports, from boxing to dancing.[3] Gymnasia also had
								teachers of wisdom and philosophy.
							</p>
						</div>
					</div>
				</section>
				<hr />
			</div>
		);
	}
}

export default Inforpet;
