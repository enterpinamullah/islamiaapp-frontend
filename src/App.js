import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import axios from 'axios';
//Components

import Navbar from './components/Navbar';
//pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#af52bf',
			main: '#9c27b0',
			dark: '#6d1b7b',
			contrastText: '#fff',
		},
		secondary: {
			light: '#33eb91',
			main: '#f44336',
			dark: '#00e676',
			contrastText: '#fff',
		},
	},
});

class App extends Component {
	componentDidMount() {
		axios.get('/screams');
	}

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<Router>
						<Navbar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/login" component={Login} />
								<Route
									exact
									path="/signup"
									component={Signup}
								/>
							</Switch>
						</div>
					</Router>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
