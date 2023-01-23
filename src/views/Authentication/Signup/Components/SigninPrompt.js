import { Box ,Typography} from '@mui/material'
import React from 'react'



const SigninPrompt = () => {
  return (
    <Box
      sx={{
        height: "93vh",
        width: "100%",
        background: "#dadbcc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "block", textAlign: "center" }}>
        <Typography sx={{ fontSize: "35px", fontWeight: "550" }}>
          Already Have an Account?
        </Typography>
        <a href="/login">Sign in Here..</a>
      </Box>
    </Box>
  );
};

export default SigninPrompt;
