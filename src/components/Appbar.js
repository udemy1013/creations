import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import toplogo from './images/creations_toplogo.png';
import mark from './images/color_mark.png';
import {Link} from 'react-router-dom';
import marklogo from './images/creations_marklogo_mobile.png';
import toplogo_mobile from './images/creations_toplogo_mobile.svg';

const pages = ['home', 'creative', 'contact', 'company'];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar id="appbar-desktop" class="relative" style={{ backgroundColor: "transparent", boxShadow: '0px 0px 0px 0px',  zIndex: 50}}>
      <Container maxWidth="xl">
        <Toolbar  disableGutters>
          <img src={mark} className='just-absolute header-mark' alt='colorlogo'/>
          <Link to={"/home"}>
          <img src={toplogo} alt="logo" width={"100%"}/>
          </Link>          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' , justifyContent: "flex-end"} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{fontFamily: "Kanit"}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: "flex-end"}}>
            {pages.map((page) => (
              <Link
                key={page}
                to={"/" +page}
                sx={{ textDecoration: 'none !important' }}
                >
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', color: '#433639',  fontFamily: "Kanit" , fontWeight: 300, textTransform: "lowercase", fontSize: "16px",  textDecoration: 'none !important'}}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <AppBar id="appbar-mobile" class="relative" style={{ backgroundColor: "transparent", boxShadow: '0px 0px 0px 0px',  zIndex: 50}}>
      <Container maxWidth="xl">
        <Toolbar  disableGutters>
          <Link to={"/home"}>
            <img src={marklogo} alt="logo" width={"100%"} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' , justifyContent: "flex-end"} }}>
            <img src={toplogo_mobile} alt="logo" height={"18px !important"}/>
          </Box>          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' , justifyContent: "flex-end"} }}>
          
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={"/" +page} textAlign="center" style={{fontFamily: "Kanit", textDecoration: 'none !important', color: "#333333" }}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: "flex-end"}}>
            {pages.map((page) => (
              <Link
                key={page}
                to={"/" +page}
                sx={{ textDecoration: 'none !important' }}
                >
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', color: '#433639',  fontFamily: "Kanit" , fontWeight: 300, textTransform: "lowercase", fontSize: "16px",  textDecoration: 'none !important'}}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Appbar;
