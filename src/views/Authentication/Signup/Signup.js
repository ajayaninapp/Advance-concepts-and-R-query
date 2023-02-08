import React from 'react'
import { Grid } from '@mui/material'
import SignupForm from './Components/SignupForm'
import SigninPrompt from './Components/SigninPrompt'


const Signup = () => {
  return (
    <>
    <Grid container sx={{  }}>
      <Grid item sm={7} xs={12}>
        <SignupForm/>
      </Grid>
      <Grid item sm={5} xs={12}>
        <SigninPrompt/>
      </Grid>
    </Grid>
  </>
  )
}

export default Signup