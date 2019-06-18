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
			<Navbar.Brand href="/">
				<Image src={Logo} width="90" height="70" roundedCircle />
				{' Yara Can'}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" />
				<Nav>
					<Nav.Link href="/">INICIO</Nav.Link>
					<Nav.Link href="#link">NOTICIAS</Nav.Link>
					<Nav.Link href="/albergues">ALBERGUES</Nav.Link>
					<Nav.Link href="#link">EVENTOS</Nav.Link>
					<Nav.Link href="/informacion">INFORMACION</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
