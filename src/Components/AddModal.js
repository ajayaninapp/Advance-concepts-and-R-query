import React from "react";
import { useState } from "react";
import {
  MenuItem,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  DialogActions,
  TextField,
  Card,
  Select,
} from "@mui/material";

const AddModal = (props) => {
  const [newTableData1, setNewTableData1] = useState({
    id:"",
    firstname:"",
    lastname: "",
    phone: "",
    group: " ",
    status: "",
  });
  const { open, setOpen, newTableData, setNewTableData,postTableData } = props;

  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };
  const handleNewTableData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(value)
    setNewTableData({ ...newTableData, [name]: value });
    
  };
  console.log(newTableData);
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
              label="First Name"
              size="small"
              onChange={(e) => handleNewTableData(e)}
              name="firstname"
              
              
            />
            <TextField
              sx={{ margin: "12px" }}
              label="Last Name"
              size="small"
              onChange={(e) => handleNewTableData(e)}
              name="lastname"
              
            />
            <TextField
              sx={{ margin: "12px" }}
              label="Phone Number"
              size="small"
              onChange={(e) => handleNewTableData(e)}
              name="phone"
              
            />
            <Select
              defaultValue={"SuperAdmin"}
              sx={{ margin: "12px" }}
              size="small"
              onChange={(e) => handleNewTableData(e)}
              name="group"
              
            >
              <MenuItem value={"All"}>All Customers</MenuItem>
              <MenuItem value={"SuperAdmin"}>Super Admin</MenuItem>
              <MenuItem value={"Customer Admin"}>Customer Admin</MenuItem>
            </Select>
            <Select
              defaultValue={"true"}
              sx={{ margin: "12px" }}
              size="small"
              onChange={(e) => handleNewTableData(e)}
              name="status"
              
            >
              <MenuItem value={"true"}>Active</MenuItem>
              <MenuItem value={"false"}> Disabled</MenuItem>
            </Select>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => postTableData(newTableData)}>Add User</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddModal;
