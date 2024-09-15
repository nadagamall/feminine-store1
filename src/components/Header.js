import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/iconcart.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/Cart';
import logo from '../assets/logo-1.png';
import IconButton from '@mui/material/IconButton';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../theme';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Face4Icon from '@mui/icons-material/Face4';

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const Carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const { toggleColorMode, themeMode } = useContext(ColorModeContext);
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  useEffect(() => {
    let total = 0;
    Carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [Carts]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="w-full">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto p-4">
        {/* الشعار على اليسار */}
        <div className="flex-shrink-0">
          <img src={logo} alt="logo" className="w-30 h-20" />
        </div>

        {/* الروابط في المنتصف */}
        <div className="flex-grow flex justify-center space-x-8">
          <Link to="/" className="font-semibold">
            Home
          </Link>
          <Link to="/new-arrivals" className="font-semibold">
            New Arrivals
          </Link>
        </div>

        {/* الأيقونات على اليمين */}
        <div className="flex items-center space-x-4">
          <IconButton onClick={toggleColorMode} color="inherit">
            {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  <Face4Icon />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>

          <div
            className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center relative cursor-pointer"
            onClick={handleOpenTabCart}
          >
            <img src={iconCart} alt="Cart" className="w-6" />
            {totalQuantity > 0 && (
              <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
                {totalQuantity}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
