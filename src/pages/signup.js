import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import AppIcon from "../images/icon.png";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
/*Is it working?*/

const styles = (theme) => ({
    ...theme.spreadThis,
});
class signup extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            handle: "",
            loading: false,
            errors: {},
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true,
        });
        const userData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle,
        };
        axios
            .post("/signup", userData)
            .then((res) => {
                localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
                this.setState({
                    loading: false,
                });
                this.props.history.push("/");
            })
            .catch((err) => {
                this.setState({
                    errors: err.response.data,
                    loading: false,
                });
            });
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;
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
                        Signup
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            id="handle"
                            name="handle"
                            type="text"
                            label="Full Name"
                            helperText={errors.handle}
                            error={errors.handle ? true : false}
                            className={classes.textfield}
                            value={this.state.handle}
                            onChange={this.handleChange}
                            fullWidth
                        />
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
                        <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            helperText={errors.confirmPassword}
                            error={errors.confirmPassword ? true : false}
                            className={classes.textfield}
                            value={this.state.confirmPassword}
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
                            Signup
                            {loading && (
                                <CircularProgress
                                    className={classes.progress}
                                    disableShrink
                                />
                            )}
                        </Button>
                        <hr />
                        <small>
                            Already have an account ? Login{" "}
                            <Link to="/login">here</Link>
                        </small>
                    </form>
                </Grid>
                <Grid item sm />
            </Grid>
        );
    }
}
signup.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(signup);
