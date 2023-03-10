import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  DialogActions,
  TextField,
  Card,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { formValidationSchema } from "../common/FormValidation";
import { useTableContext } from "../views/HomeScreen/InfoTable/context";
const AddModal = (props) => {
  const { open, setOpen, newTableData, setNewTableData } = props;
  const{postTableData}=useTableContext();

  const validationSchema = formValidationSchema;
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      company: "",
    },
    validationSchema,
    onSubmit: (values, resetForm) => {
      console.log
      postTableData(values);
      resetForm({ values: "" });
    },
  });
  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "600px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <Card>
            <TextField
              sx={{ margin: "12px" }}
              label="Name"
              size="small"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              name="name"
            />
            <TextField
              sx={{ margin: "12px" }}
              label="Username"
              size="small"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              name="username"
            />
            <TextField
              sx={{ margin: "12px" }}
              label="Email"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              name="email"
            />
            <TextField
              sx={{ margin: "12px" }}
              label="Company"
              value={formik.values.company}
              size="small"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
              name="company"
            />
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={formik.handleSubmit}>Add User</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddModal;
