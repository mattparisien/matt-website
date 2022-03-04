import React from "react";
import Layout from "./Layout";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

function HomePage() {
	return (
		<>
			<Layout height='100vh' bg='light'>
				<Typography variant='h1' component='h1'>
					Matth3w
				</Typography>
			</Layout>
			<Layout height='100vh' bg='dark'>
				<Typography variant='h4' gutterBottom gutterTop>
					Craft, code and smile.We are a digital agency. Our approach is
					characterized by an agile method combining strategy, design and
					technology. Oh, and great people too.
				</Typography>
        <Grid container>  
          <Grid item>

          </Grid>
        </Grid>
			</Layout>
		</>
	);
}

export default HomePage;
