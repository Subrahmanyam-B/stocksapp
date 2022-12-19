import * as React from 'react';
import {Link} from 'react-router-dom';

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
import SearchIcon from '@mui/icons-material/Search';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const drawerWidth = 80;

export default function Navbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline/>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar >
        </Toolbar>
        <List>
            <Link to="/">  
            <ListItem key='Dashboard' disablePadding >
              <ListItemButton>
                <ListItemIcon className ="icon">
                  <ShowChartIcon/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            </Link>
            <Link to="/search">
            <ListItem key='Search' disablePadding >
              <ListItemButton>
                <ListItemIcon className ="icon">
                  <SearchIcon/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>  
            </Link>
            <Link to="/news">  
            <ListItem key='News' disablePadding >
              <ListItemButton>
                <ListItemIcon className = "icon">
                  <NewspaperIcon/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            </Link>
        </List>
      </Drawer>

    </Box>
  );
}