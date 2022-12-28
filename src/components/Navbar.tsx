import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DropdownMenu from './DropdownMenu';
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.webp';

const pages = ['Home', 'How it Works', 'States', 'Join'];



function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  let navigate = useNavigate();
  const redirectRoute = (routePath : any) => {
    navigate(routePath);
    setAnchorElNav(null);
  };

  return (
    <AppBar 
    position="static"
    sx={{
      backgroundColor: "#4A5468",
      marginBlockEnd: "16px"
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} height="50px"></img>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PATIENT VOTING
          </Typography>

         
         
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
            {pages.map((page) => (
              <Button
                key={page}     
                onClick={() => redirectRoute("/" + page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>           
          </Box>
          <DropdownMenu/>
        </Toolbar>
        
      </Container>
    </AppBar>
  );
}
export default NavBar;
