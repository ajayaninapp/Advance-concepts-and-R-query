import React from "react";
import { Box,Typography,Grid } from "@mui/material";
import { CustomButton,FormEmail } from "../../../../common/styledComponents/styledComponent";

const LoginForm = () => {
  return (
    <Box
      sx={{
        height: "88vh",
        width: "100%",
        background: "#FCFCFC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      align="center"
    >
      <Box>
        <Typography sx={{ fontSize: "35px", fontWeight: "550" }}>
          Login To Your Account
        </Typography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: 10 }}
        >
          <Grid item xl={8} lg={10} md={10} sm={11} xs={11}>
            <FormEmail
              className="inputRounded"
              fullWidth
              label="E-mail"
              type={"email"}
            />
            <FormEmail
              className="inputRounded"
              fullWidth
              label="Password"
              type={"password"}
              sx={{ marginTop: 5 }}
            />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={8} xs={8}>
            <CustomButton fullWidth>Log In</CustomButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default LoginForm