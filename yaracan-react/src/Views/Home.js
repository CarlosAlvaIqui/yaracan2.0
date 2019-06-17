import React from 'react';
import { Image, Card, Button } from 'react-bootstrap';
import dog from '../Assets/Images/dog.jpg';

const Home = props => {
	return (
		<div className="container-fluid">
			{/* Seccion paara mostrar imagenes y descripcion de los paquetes */}
			<section>
				<div className="row" />
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
						<div class="row justify-content-center mt-4">
							<div class="col-10">
								<Card border="warning">
									<Card.Img variant="top" src={dog} height="200" />
									<Card.Body>
										<Card.Title>
											<h5 align="center">Primer Paquete</h5>
										</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
										<Button variant="info" size="lg" block>
											Informacion
										</Button>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
						<div class="row justify-content-center mt-4">
							<div class="col-10">
								<Card border="warning">
									<Card.Img variant="top" src={dog} height="200" />
									<Card.Body>
										<Card.Title>
											<h5 align="center">Segundo Paquete</h5>
										</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
										<Button variant="info" size="lg" block>
											Informacion
										</Button>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
						<div class="row justify-content-center mt-4">
							<div class="col-10">
								<Card border="warning">
									<Card.Img variant="top" src={dog} height="200" />
									<Card.Body>
										<Card.Title>
											<h5 align="center">Tercer Paquete</h5>
										</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
										<Button variant="info" size="lg" block>
											Informacion
										</Button>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
						<div class="row justify-content-center mt-4 mb-5">
							<div class="col-10">
								<Card border="warning">
									<Card.Img variant="top" src={dog} height="200" />
									<Card.Body>
										<Card.Title>
											<h5 align="center">Cuarto Paquete</h5>
										</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
										<Button variant="info" size="lg" block>
											Informacion
										</Button>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
