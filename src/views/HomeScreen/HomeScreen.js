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
    <TableContextDataHandler>
    <InfoTable />
    </TableContextDataHandler>
  );
};
export default HomePage;
