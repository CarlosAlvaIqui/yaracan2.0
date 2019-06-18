import React, { Component } from 'react';
import axios from '../utils/axios';
import Carspet from '../Components/CarsPet/Carspet';
import { CardGroup, Card } from 'react-bootstrap';

class Home extends Component {
	state = {
		datos: []
	};
	componentDidMount = () => {
		axios({
			method: 'GET',
			url: 'pet/'
		})
			.then(response => {
				// console.log(response.data.data[0].subData.sexo);
				// console.log(response.data.data);
				this.datosHandler(response.data);
			})
			.catch(error => {
				console.log('HUBO ERROR : ', error);
			});
		// console.log(this.datos);
	};

	datosHandler = recibido => {
		this.setState({ datos: recibido.data });
	};
	render() {
		const perros = this.state.datos.map((dato, i) => {
			return (
				<Carspet
					name={dato.subData.petname}
					sexo={dato.subData.sexo}
					raza={dato.subData.raza}
					descripcion={dato.subData.descripcion}
					url={dato.subData.urlImage}
					_id={dato.subData._id}
				/>
			);
		});
		return (
			<div class="container-fluid">
				<section>
					<div class="row">{perros}</div>
				</section>
			</div>
		);
	}
}

export default Home;
