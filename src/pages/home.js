import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
	render() {
		return (
			<Grid container spacing={16}>
				<Grid item sm={8} xs={12}>
					Screams
				</Grid>
				<Grid item sm={4} cs={12}>
					Profiles
				</Grid>
			</Grid>
		);
	}
}

export default Home;
