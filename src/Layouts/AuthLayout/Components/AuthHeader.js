import { AppBar,Box,Toolbar,Menu,MenuItem ,IconButton ,Button, Typography} from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import z5Logo from '../../../Assets/images/z5logo.png';

const  AuthHeader= () => {
  return (
    
   <AppBar sx={{position:"static" ,background:'#333'}}>
     <Box sx={{flexgrow:1}}>
      <Toolbar  position="static" >
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
    </Box>
   </AppBar>
  )
}

export default AuthHeader