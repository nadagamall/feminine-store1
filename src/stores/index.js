import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './Cart';


export const store = configureStore ({
reducer :{
    cart: cartReduser,
},

});

