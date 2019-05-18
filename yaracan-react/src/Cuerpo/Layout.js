import React, { Fragment } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = props => {
	return (
		<Fragment>
			<Header />
			<main id="main">{props.children}</main>
			<Footer />
		</Fragment>
	);
};
export default Layout;
