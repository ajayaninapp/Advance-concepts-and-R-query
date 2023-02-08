import React from "react";
import { Box,Typography,Grid } from "@mui/material";
import { CustomButton,FormEmail } from "../../../../common/styledComponents/styledComponent";
import { useFormik } from "formik";
import { authValidationSchema } from "../../../../common/FormValidation";
import {  Auth } from 'aws-amplify';
import { useAuthDataContext } from "../../../AuthDataHandler/AuthDatahandler";
const LoginForm = () => {
  const {signIn}=useAuthDataContext();
  const validationSchema=authValidationSchema;
 
  const formik = useFormik({
    initialValues: {
      email:""
      ,password:""
    },
    validationSchema,
    onSubmit: (values, resetForm) => {
      


      signIn(values.email,values.password)
    },
  });

  return (
    <Box
      sx={{
        height: "93vh",
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
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              name="email"
              label="Email"
            />
            <FormEmail
              className="inputRounded"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              type={"password"}
              name="password"
              sx={{ marginTop: 5 }}
            />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={8} xs={8}>
            <CustomButton fullWidth  onClick={formik.handleSubmit}>Log In</CustomButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default LoginForm