import React from 'react'
import { Grid, Box } from "@mui/material";
import LoginForm from './Components/LoginForm';


const Login = () => {
  return (
    <>
    <Grid container sx={{  }}>
      <Grid item sm={5} xs={12}>
        <div className="background"></div>
      </Grid>
      <Grid item sm={7} xs={12}>
          <LoginForm/>
      </Grid>
    </Grid>
  </>
  )
}

export default Login