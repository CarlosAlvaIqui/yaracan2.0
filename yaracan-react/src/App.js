import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Cuerpo/Layout';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Switch />
				</Layout>
			</BrowserRouter>
		);
	}
}
export default App;
