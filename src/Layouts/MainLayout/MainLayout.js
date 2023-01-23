import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Header } from "../../Components";
import { InfoTable } from "../../views/HomeScreen/InfoTable";
import SideDrawer from "../../Components/SideDrawer"
import { HomeScreen } from "../../views/HomeScreen";
const MainLayout = (props) => {
    const {children}=props;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "#333" }}
      >
        
        <Header />
        
      </AppBar>
      <SideDrawer/>

      <Box component="main" sx={{ flexGrow: 1, background:"#f0eeeb",minHeight:"100vh" ,maxWidth:"calc(100vw-240px)",overflowX:"hidden"}}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
  
};

export default MainLayout;
