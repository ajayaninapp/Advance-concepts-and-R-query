import React from 'react'
import { AppBar,Box,Toolbar,Menu,MenuItem ,IconButton ,Button, Typography} from '@mui/material'
import z5Logo from "../Assets/images/z5logo.png"
import TranslateIcon from '@mui/icons-material/Translate';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


const Header = () => {
  return (
   
        <AppBar sx={{background:'#333'}}>
          
          <Toolbar  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,height:'120px'}}>
          <Box sx={{flexGrow:1}} >
          <IconButton           
          
            edge="start"
            color="inherit"
            aria-label="menu"
            component="div"
            sx={{
              height:"5px"
            }}
          >
            <img src={z5Logo} className="logo"></img>
          </IconButton>
          </Box>
          
          <TranslateIcon  />
          <Typography  sx={{marginX:2}}>English(en-US)</Typography>
          <NotificationsActiveIcon sx={{marginX:2}}/>
          <SettingsIcon sx={{marginX:2}}/>
          

          </Toolbar>
        </AppBar>
  


  )
}

export default Header