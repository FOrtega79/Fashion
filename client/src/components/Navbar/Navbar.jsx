import {useState}   from 'react'
import AppBar       from '@mui/material/AppBar'
import Box          from '@mui/material/Box'
import Toolbar      from '@mui/material/Toolbar'
import IconButton   from '@mui/material/IconButton'
import Typography   from '@mui/material/Typography'
import Menu         from '@mui/material/Menu'
import MenuIcon     from '@mui/icons-material/Menu'
import Container    from '@mui/material/Container'
import Avatar       from '@mui/material/Avatar'
import Button       from '@mui/material/Button'
import Tooltip      from '@mui/material/Tooltip'
import MenuItem     from '@mui/material/MenuItem'
import Badge        from '@mui/material/Badge'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import {Link}       from "react-router-dom"
import { AuthContext } from '../../context/auth.contex'
import { useContext } from 'react'
import CartDrawer from '../Cart/Cart'


function ResponsiveAppBar() {

  const {isLoggedIn, user, logOutUser} = useContext(AuthContext)

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  const pages = ['Scarfs', 'Bags', 'Outlet', 'About this project'];
  const userLoggedIn = [<Link to={"/user/profile"}>Profile</Link>, <Link to={"/"} onClick={logOutUser}>Log Out</Link>]
  const userNotLoggedIn = [<Link to={"/login"}>Login</Link>, <Link to={"/signup"}>Sign up</Link>]



  return (
    <AppBar  position="fixed" style={{background:'#ffffff'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ mr: 8, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to={"/"}> MOBDL Designs</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
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
                display: { xs: 'block', md: 'none' },
              }}
            >
             
              {pages.map((page, i) => (
                <div key={i}>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                </div>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to={"/"}> MOBDL Designs</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
            {pages.map((page, i) => (
           <div key={i} >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}

              </Button>
              </div>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <IconButton size="large" aria-label="show 4 new mails" color="default">
              <Badge badgeContent={0} color="secondary" variant="dot">
                <CartDrawer />
              </Badge>
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {isLoggedIn ? 
                <Avatar>
                  <ManageAccountsOutlinedIcon />
                </Avatar>
                :
                <Avatar>
                  <PersonOutlineOutlinedIcon/>
                </Avatar>
              }
              </IconButton>
            </Tooltip>


          
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
      {isLoggedIn ? 
        <div>
              {userLoggedIn.map((userLoggedIn, i) => (
                <div key={i}>
                <MenuItem key={userLoggedIn} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{userLoggedIn}</Typography>
                </MenuItem>
                </div>
              ))}
              </div>
                :
                <div>
                {userNotLoggedIn.map((userNotLoggedIn, i) => (
                  <div key={i}>
                <MenuItem key={userNotLoggedIn} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{userNotLoggedIn}</Typography>
                </MenuItem>
                </div>
              ))}
              </div>
      }
            </Menu>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
