import React, { Component } from "react";
//Material UI stuff

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar className="nav-container">
                        <Button colors="secondary" component={Link} to="./">
                            Home
                        </Button>
                        <Button colors="inherit" component={Link} to="./login">
                            Login
                        </Button>
                        <Button colors="inherit" component={Link} to="./signup">
                            Signup
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;
