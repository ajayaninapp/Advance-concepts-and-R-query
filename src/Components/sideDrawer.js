import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { CustomListItemTypography } from "../common/styledComponents/styledComponent";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';

const drawerWidth = "240px";
const SideDrawer = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Box
            sx={{
              alignItems: "center",
              width: "100%",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <AccountCircleIcon
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "60px",
                marginY: "5px",
              }}
            />
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              Abhishek V
            </Typography>
            <Typography sx={{ fontSize: "11px" }}>Super Admin</Typography>
            <Typography sx={{ fontSize: "11px" }}>(Abhishek's user)</Typography>
          </Box>
          <Divider />
          <List>
            <ListItem disableGutters disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                      Dashboard
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MenuBookIcon sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                      Catalogue
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltIcon sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                      Users
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ContentPasteIcon sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                      Purchase Orders
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                      Facilities
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding> 
              <ListItemButton>
                <ListItemIcon>
                  <SignalCellularAltIcon sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                      Analytics
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  < ListAltIcon  sx={{ color: "grey" }} />
                  <ListItemText>
                    <CustomListItemTypography>
                      Departments
                    </CustomListItemTypography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideDrawer;
