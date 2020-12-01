import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthRoute from "./util/AuthRoute";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
import store from './redux/store';
import { Provider } from 'react-redux';
import jwtDecodingToken from "jwt-decode";
//Components

import Navbar from "./components/Navbar";
//pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
    const decodedToken = jwtDecodingToken(token);
    if (decodedToken.exp * 1000 < Date.now()) {
        authenticated = false;
        window.location.href = "/login";
    } else {
        authenticated = true;
    }
}

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <div className="App">
                        <Router>
                            <Navbar />
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" component={home} />
                                    <AuthRoute
                                        exact
                                        path="/login"
                                        component={login}
                                        authenticated={authenticated}
                                    />
                                    <AuthRoute
                                        exact
                                        path="/signup"
                                        component={signup}
                                        authenticated={authenticated}
                                    />
                                </Switch>
                            </div>
                        </Router>
                    </div>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
