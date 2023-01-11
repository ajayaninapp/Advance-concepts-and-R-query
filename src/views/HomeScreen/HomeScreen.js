import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Header from "./../../Components/header";
import { InfoTable } from "./InfoTable";
import { SideDrawer } from "../../Components";
import TableContextDataHandler from "./InfoTable/context/TableContext";




const HomePage = () => {
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

      <Box component="main" sx={{ flexGrow: 1, background:"#f0eeeb",minHeight:"100vh" }}>
        <Toolbar />
        <TableContextDataHandler>
        <InfoTable />
        </TableContextDataHandler>
      </Box>
    </Box>
  );
};
export default HomePage;
