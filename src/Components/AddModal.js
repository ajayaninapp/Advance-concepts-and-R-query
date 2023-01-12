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
              label="Name"
              size="small"
              onChange={(e) => handleNewTableData(e)}
              name="name"
              
              
            />
            <TextField
              sx={{ margin: "12px" }}
              label="Username"
              size="small"
              onChange={(e) => handleNewTableData(e)}
              name="username"
              
            />
            <TextField
              sx={{ margin: "12px" }}
              label="Email"
              size="small"
              onChange={(e) => handleNewTableData(e)}
              name="email"
              
            />
             <TextField
              sx={{ margin: "12px" }}
              label="Company"
              size="small"
              onChange={(e) => handleNewTableData(e)}
              name="Company"
              
            />
            
            
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
