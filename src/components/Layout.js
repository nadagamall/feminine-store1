import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import CartTab from './CartTab';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material';


const Layout = () => {
  const theme = useTheme();
  const statusTabCart = useSelector(store => store.cart.statusTab);
 
 
  return (
   
<div>

<main className="w-full max-w-full m-auto p-5">

<Header />
<Outlet />



</main>
<CartTab />


</div>

  )
};
export default Layout;