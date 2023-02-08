import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import z5Logo from "../Assets/images/z5logo.png";
import TranslateIcon from "@mui/icons-material/Translate";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Auth } from "aws-amplify";
import { useAuthDataContext } from "../views/AuthDataHandler/AuthDatahandler";
const Header = () => {
  const {signOut}=useAuthDataContext();
  const handleSignout=()=>{
    signOut();
  }
  return (
    <AppBar sx={{ background: "#333" }}>
      <Toolbar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            component="div"
            sx={{
              height: "5px",
            }}
          >
            <img src={z5Logo} className="logo"></img>
          </IconButton>
        </Box>

        <TranslateIcon />
        <Typography sx={{ marginX: 2 }}>English(en-US)</Typography>
        <NotificationsActiveIcon sx={{ marginX: 2 }} />
        <IconButton onClick={handleSignout}><SettingsIcon sx={{ marginX: 2 ,color:"white"}} /></IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
