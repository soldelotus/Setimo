import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import style from './Header.module.css'
import {Link} from 'react-router-dom'
 
 
const pages = [
  { name: 'Home', path: '/home' },
  { name: 'Apresentação', path: '/' },
  { name: 'Time', path: '/teams' }
  ];
  const settings = [
    {name: 'Login', path: '/login'},
    {name: 'Cadastro', path: '/cadastro'},
    {name: 'Perfil', path: '/perfil'},
    {name: 'Sair', path: '/apresentacao'}
  ];
 
 
 
 
  function Header() {
 
 
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
    <React.Fragment>
      <AppBar position="fixed" className={style.header} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/Logo.png" alt="" style={{ display: 'none', md: 'flex', marginLeft: '100px' }} className='logo'/>
         
 
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <IconButton //Descobrir função
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu // Não sei o que é, mas não funciona sem
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page.path} style={{textDecoration:'none', color: '#211D1A' }}>
                  <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src="/Logo.png" alt="" style={{ display: { xs: 'flex', md: 'none' }, mr: 1}}/>
         
          {/* texto  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', marginRight: '20px', marginBottom: '10px'}}>  
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FAF3D9', display: 'block', marginRight: '30px', marginBottom: '25px' }}
              >
                <Link to={page.path} style={{textDecoration:'none', color: '#FAF3D9'}}>
                  {page.name}
                </Link>
               
              </Button>
            ))}
          </Box>
 
            {/* bonequinho avatar */}
          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings" >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}} style={{marginBottom: '18px'}}>
                <Avatar alt="Remy Sharp" src="/Avatar.svg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              style={{ background: 'transparent', boxShadow: 'none'}}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to={setting.path} style={{textDecoration:'none', color: '#000'}}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
   
    </React.Fragment>
   
  );
}
export default Header;