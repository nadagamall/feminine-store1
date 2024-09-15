import React from 'react';
import { Link } from 'react-router-dom';
import iconcart from '../assets/iconcart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/Cart';
import { useTheme } from '@mui/material';


const ProductCart = ( props ) => {
    const carts = useSelector(store => store.cart.items);
    const { id, name, price, image, slug } = props.data;

    const theme = useTheme();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    };

    return (
        <div className='p-5 rounded-xl shadow-sm w-full h-full'>
            <Link to={slug}>
                <img
                    src={image}
                    alt='Product'
                    className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]'
                />
            </Link>
            <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
            <div className='flex justify-between items-center'>
            
                <p>
                    $ <span className='text-2xl font-medium'>{price}</span>
                </p>

                <button
                    className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 border-radius-3'
                    onClick={handleAddToCart}>
                    <img src={iconcart} alt="icon" className='w-5 border-radius-3' />
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCart;