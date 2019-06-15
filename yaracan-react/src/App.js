import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Importando el cuerpo de la pagina WEB YARACAN
import Layout from './Cuerpo/Layout';
//importano las vistas
import Home from './Views/Home';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path="/" exact component={Home} />
					</Switch>
				</Layout>
			</BrowserRouter>
		);
	}
}
export default App;
