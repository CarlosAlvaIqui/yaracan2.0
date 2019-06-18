import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import CarouselComponent from '../Components/Carousel/Carousel';

class Informacion extends Component {
	render() {
		return (
			<div class="container-fluid">
				<section class="mt-2">
					<CarouselComponent />
				</section>
				<hr />
				<section>
					<div class="row justify-content-center mb-3">
						<div align="center">
							<h1 style={{ color: 'black' }}>Yara Can</h1>
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
				<section>
					<div class="row justify-content-center mb-3">
						<div align="center">
							<h1 style={{ color: 'black' }}>¿Quienes somos?</h1>
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
				<section>
					<div class="row justify-content-center mb-3">
						<div align="center">
							<h1 style={{ color: 'black' }}>
								¿Buscanos en nuestras redes sociales?
							</h1>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
export default Informacion;
