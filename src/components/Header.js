import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/iconcart.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/Cart';
import logo from '../assets/logo-1.png';
import IconButton from '@mui/material/IconButton';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material'; // إضافة أيقونة القائمة
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
import Drawer from '@mui/material/Drawer'; // لاستخدام القائمة الجانبية

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

  // لإدارة القائمة الجانبية
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    
    <header className="">
<div className={{}}>
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="logo"
            className="w-20 h-14 md:w-30 md:h-20 border-radius-5 object-contain"

          />
        </div>

        {/* الروابط في المنتصف مخفية في الشاشات الصغيرة */}
        <div className="hidden md:flex-grow md:flex justify-center space-x-8 mb-5 mt-[-50px] ">
          <Link to="/" className="font-semibold">
            Home
          </Link>
          <Link to="/NewArrival" className="font-semibold">
            New Arrivals
          </Link>
        </div>

        {/* الأيقونات على اليمين */}
       <Box sx={{ position: 'absolute', top: 10, right: 7, p: 2 }}>
  <div className="flex space-x-2">
    <IconButton onClick={toggleColorMode} >
      {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>

    {/* حساب المستخدم */}
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

    {/* قائمة المستخدم */}
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

    {/* أيقونة العربة */}
    <div
  className="w-9 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex justify-center items-center relative cursor-pointer"
  onClick={handleOpenTabCart}
>
  <img src={iconCart} alt="Cart" className="w-5 sm:w-6 object-contain" />
  {totalQuantity > 0 && (
    <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-xs sm:text-sm w-4 h-4 sm:w-5 sm:h-5 rounded-full flex justify-center items-center">
      {totalQuantity}
    </span>
  )}
</div>

  </div>
</Box>

          {/* أيقونة القائمة الجانبية للشاشات الصغيرة */}
          <div className="md:hidden">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>


      {/* القائمة الجانبية للشاشات الصغيرة */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            bgcolor: themeMode === 'dark' ? '#333' : '#fff',  // تعيين الخلفية بناءً على الوضع
            color: themeMode === 'dark' ? '#fff' : '#000',   // تعيين لون النص
          },
        }}
      >
        <div
          className="w-64"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className={`w-64 ${themeMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="font-semibold">
              Home
            </Link>
            <Link to="/NewArrival" className="font-semibold">
              New Arrivals
            </Link>
          </div>
          </div>
          
        </div>
          
      </Drawer>
    
    </header>

  );
}

export default Header;
