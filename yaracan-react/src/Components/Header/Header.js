import React from 'react';
import {
	Nav,
	Navbar,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Image
} from 'react-bootstrap';
import Logo from '../../Assets/Images/perroYara.jpg';

const Header = props => {
	return (
		<Navbar bg="info" variant="dark" expand="lg">
			<Navbar.Brand href="#home">
				<Image src={Logo} width="90" height="70" roundedCircle />
				{' Yara Can'}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Inicio</Nav.Link>
					<Nav.Link href="#link">Noticias</Nav.Link>
					<Nav.Link href="#link">Albergues</Nav.Link>
					<Nav.Link href="#link">Eventos</Nav.Link>
					<Nav.Link href="#link">Reportar</Nav.Link>
					<Nav.Link href="#link">Adoptar</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="#link">Iniciar Sesion</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
