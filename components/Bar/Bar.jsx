import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Bar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}

          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tuition App
          </Typography>
          <Link to="/"><Button variant="primary" style={{color:'white'}}>Home</Button></Link>
          <DropdownButton id="dropdown-basic-button" title="Contact Us">
          <Dropdown.Item href="#/action-1">Phone:9999999</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Email</Dropdown.Item>
          <Dropdown.Item href="#/action-3">HeadOffice</Dropdown.Item>
          </DropdownButton>
          <Link to="/about"><Button variant="primary" style={{color:'white'}}>About</Button></Link>
          <Link to="/add"><Button variant="primary" style={{color:'white'}}>Login</Button></Link>
          <Link to="/form"><Button variant="primary" style={{color:'white'}}>Add</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default Bar