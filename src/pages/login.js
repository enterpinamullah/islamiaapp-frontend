import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import AppIcon from "../images/icon.png";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//REDUX Stuff

import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles = (theme) => ({
    ...theme.spreadThis,
});

class login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            loading: false,
            errors: {},
        };
        
    }
    // static getDerivedStateFromProps(props, state){
    //     if(props.UI.errors){
    //         this.setState({errors: props.UI.errors});
    //     }
    // }
    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(userData, this.props.history)
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    render() {
        const { classes, UI: { loading } } = this.props;
        const { errors } = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm>
                    <img
                        src={AppIcon}
                        height={150}
                        width={150}
                        alt="something went wrong"
                    />
                    <Typography variant="h2" className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            className={classes.textfield}
                            value={this.state.email}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            className={classes.textfield}
                            value={this.state.password}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        {errors.general && (
                            <Typography
                                variant="body2"
                                className={classes.customError}
                            >
                                {errors.general}
                            </Typography>
                        )}
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.button}
                            disabled={loading}
                        >
                            Login
                            {loading && (
                                <CircularProgress
                                    className={classes.progress}
                                    disableShrink
                                />
                            )}
                        </Button>
                        <hr />
                        <small>
                            Don't have an account ? Signup
                            <Link to="/signup"> here</Link>
                        </small>
                    </form>
                </Grid>
                <Grid item sm />
            </Grid>
        );
    }
}
login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    loginUser
}
export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login))
