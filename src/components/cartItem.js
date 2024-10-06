import React, { useState, useEffect } from 'react';
import { Products } from '../Products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/Cart';
import { useTheme } from '@mui/material';

const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    const theme = useTheme(); // الحصول على الثيم الحالي

    useEffect(() => {
        const findDetail = Products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }

    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }

    if (!detail) return null;

    return (
        <div className='flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full md:w-auto p-4 border-b'>
            <img src={detail.image} alt={detail.name} className='w-12 h-12 md:w-16 md:h-16 object-cover' />
            <div className='flex-1'>
                <h3 className='text-sm md:text-lg font-semibold'>{detail.name}</h3>
                <p className='text-sm md:text-md text-gray-500'>${detail.price * quantity}</p>
                
                <div className='flex items-center gap-2 mt-2'>
                    <button className='bg-gray-200 rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center'
                        onClick={handleMinusQuantity}>
                        -
                    </button>
                    <span className='text-sm md:text-lg'>{quantity}</span>
                    <button className='bg-gray-200 rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center'
                        onClick={handlePlusQuantity}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
