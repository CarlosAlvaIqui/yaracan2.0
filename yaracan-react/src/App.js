import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Importando el cuerpo de la pagina WEB YARACAN
import Layout from './Cuerpo/Layout';
//importano las vistas
import Home from './Views/Home';
import Info from './Views/Infopet';
import Informacion from './Views/Informacion';
import Albergues from './Views/Albergues';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/info/:id" component={Info} />
						<Route path="/informacion" component={Informacion} />
						<Route path="/albergues" component={Albergues} />
					</Switch>
				</Layout>
			</BrowserRouter>
		);
	}
}
export default App;
