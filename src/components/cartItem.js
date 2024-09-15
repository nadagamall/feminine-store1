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
        <div>
            <img src={detail.image} alt={detail.image} className='w-12' />
            <h3 className=''>{detail.name}</h3>
            <p>${detail.price * quantity}</p>
           
            <div className='w-20 flex justify-between gap-2 mb-2'>
                <button className='bg-gray-200 rounded-full w-6 h-6 border-radues-3 '
                    onClick={handleMinusQuantity}>
                    -
                </button>
                <span className=''>{quantity}</span>
                <button className='bg-gray-200 rounded-full w-6 h-6 border-radues-3'
                    onClick={handlePlusQuantity} >
                    +
                </button>
            </div>
        </div>
    );
}

export default CartItem;