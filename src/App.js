import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//Components

import Navbar from "./components/Navbar";
//pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#af52bf",
            main: "#9c27b0",
            dark: "#6d1b7b",
            contrastText: "#fff",
        },
        secondary: {
            light: "#33eb91",
            main: "#f44336",
            dark: "#00e676",
            contrastText: "#fff",
        },
    },
    spreadThis: {
        typography: {
            useNextVariants: true,
        },
        form: {
            textAlign: "center",
            marginTop: 10,
        },
        image: {
            margin: "20px auto 20px auto",
        },
        pageTitle: {
            margin: "5px auto 20px auto",
        },
        textField: {
            margin: "10px auto 10px auto",
        },
        button: {
            marginTop: 20,
            position: "relative",
        },
        customError: {
            color: "red",
            fontSize: "0.8rem",
            marginTop: 10,
        },
        progress: {
            position: "absolute",
            color: "red",
        },
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Router>
                        <Navbar />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={home} />
                                <Route exact path="/login" component={login} />
                                <Route
                                    exact
                                    path="/signup"
                                    component={signup}
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
