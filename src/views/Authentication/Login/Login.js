import React from 'react'
import { Grid, Box } from "@mui/material";
import LoginForm from './Components/LoginForm';
import SignUpPrompt from './Components/SignUpPrompt';


const Login = () => {
  return (
    <>
    <Grid container sx={{  }}>
      <Grid item sm={5} xs={12}>
        <SignUpPrompt/>
      </Grid>
      <Grid item sm={7} xs={12}>
          <LoginForm/>
      </Grid>
    </Grid>
  </>
  )
}

export default Login