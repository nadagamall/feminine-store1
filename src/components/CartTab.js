import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab } from '../stores/Cart';
import { Link } from 'react-router-dom';

const CartTab = () => {
    const Carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();

    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }

    const handleCheckout = () => {
        handleCloseTabCart();
    }

    return (
        <div 
            className={`fixed top-0 right-0 bg-gray-300 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
            transform transition-transform duration-500 z-50
            ${statusTab ? "translate-x-0" : "translate-x-full"}
            `}
        >
            <h2 className='p-5 text-2xl text-center text-purple-400'>Shopping Cart</h2>
            <div className='p-5 overflow-y-auto'>
                {Carts.map((item, key) => 
                    <CartItem key={key} data={item} />
                )}
            </div>
            <div className='grid grid-cols-2 gap-2 p-5'>
                <button className="bg-black text-white p-2" onClick={handleCloseTabCart}>
                    CLOSE
                </button>
                <button className="bg-purple-800 text-white p-2">
                    <Link to="/test" className='text-xl font-semibold text-white' onClick={handleCheckout}>
                        CHECKOUT
                    </Link> 
                </button>
            </div>
        </div>
    )
}

export default CartTab;
