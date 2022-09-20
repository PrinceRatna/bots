import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import { NavLink } from 'react-router-dom';
const drawerWidth = 240;
export default function Navbar() {
  return (

      
      <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="main"
        sx={{  bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
         
        </Typography> */}
      </Box>
      <Drawer
        
        variant="permanent"
        sx={{
          width: drawerWidth,
          // backgroundColor:'yellow',
          height:'150px',
          color:'red',
          flexShrink:0,
          '& .MuiDrawer-paper': {
            width: '200px',
            height:"150px",
            // backgroundColor:'black',
            boxSizing: 'border-box',
          },
        }}
        anchor="right"
      >
        {/* <Toolbar /> */}
        {/* <Divider /> */}
        {/* <link to="/home"> */}
        <NavLink to="/home" style={{textDecoration:'none',color:'black'}}>
        <List>
                <ListItem key="Home" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon /> 
                </ListItemIcon>
                <ListItemText primary="Home"/>
               </ListItemButton>
               </ListItem>
            
        </List>
        </NavLink>
        {/* </link> */}
       
       {/* <link to="/forum"> */}
       <NavLink to="/forum" style={{textDecoration:'none',color:'black'}}>
       <List>
                <ListItem key="Forum" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ForumIcon /> 
                </ListItemIcon>
                <ListItemText primary="Forum"/>
               </ListItemButton>
               </ListItem>
            
        </List>
        </NavLink>
       {/* </link> */}
       
        {/* <Divider /> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      </Box>
  )
}





