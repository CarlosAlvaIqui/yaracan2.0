import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

import slide1 from '../../Assets/Images/car1.jpg';
import slide2 from '../../Assets/Images/car2.jpg';
import slide3 from '../../Assets/Images/dog3.jpg';
import slide4 from '../../Assets/Images/dog4.jpg';

class CarouselComponent extends React.Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<div class="container-fluid">
						<img className="d-block w-100" src={slide1} alt="First slide" />
						<Carousel.Caption>
							{/* <Whatsapp />
                            <label>987567456</label>
                            <br />
                            <Facebook />
                            <label>www.nose.com</label> */}
							{/* <div class="row" style={{ background: 'blue' }}>
                                aqui
                            </div>
                            <div class="row" style={{ background: 'white' }}>
                                2
                            </div> */}
							<h3>Cuida a los animales!</h3>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div class="container-fluid">
						<img className="d-block w-100" src={slide2} alt="Third slide" />
						<Carousel.Caption>
							<h3>Protege a tu amigo de cuatro patas!</h3>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div class="container-fluid">
						<img className="d-block w-100" src={slide3} alt="Third slide" />
						<Carousel.Caption>
							<h3>Todos somo seres vivos!</h3>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div class="container-fluid">
						<img className="d-block w-100" src={slide4} alt="Third slide" />
						<Carousel.Caption>
							<h3>Ellos te quieren y te aman!</h3>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
			</Carousel>
		);
	}
}
export default CarouselComponent;
