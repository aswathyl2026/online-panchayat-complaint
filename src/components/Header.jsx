import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#1c100a'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src="/logo1.png" alt="" height={'40 px'} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Online Complaint System
          </Typography>
             <h5 className='p-3 m-3'>
              <a className='text-decoration-none text-light' href="https://lsgkerala.gov.in/en/lbelection/electdmemberdet/2020/496">ARATTUPUZHA GRAMA PANCHAYATH</a></h5>
          <Link to={"/"} style={{color:'white', fontSize:'40px'}}><FaHome/></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
