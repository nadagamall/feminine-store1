import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../Products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/Cart';


const Details = () => {
    const { slug } = useParams();
    const [Details, setDetails] = useState([]);
    const [quantity, setQuantity] = useState (0);
    const dispatch = useDispatch();
  

    useEffect(() => {
        const findDetails = Products.filter(Product => Product.slug === slug);
        if (findDetails.length > 0) {
            setDetails(findDetails[0]);
        } else {
            window.location.href='/';
        }
    }, [slug])

    const handleMinusQuantity =()=>
    {
       setQuantity(quantity - 1 < 1? 1:quantity-1);
    };

    const handlePlusQuantity = () =>
    {
      setQuantity(quantity + 1);
    };

    const handleAddToCart =()=>
    {
        if (Details) {
        dispatch(addToCart({
            productId : Details.id,
            quantity : quantity,
        }));
    }
};



    if (!Details) return null;
    
    return (
        <div>
                <h2 className='text-3xl text-center pt-4'> PRODUCT DETAIL</h2>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                <div>
                    <img src={Details.image} alt='' className='w-full h-100'  />
                </div>
                <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-2xl'> {Details.name}</h1>
                    <p className='font-bold text-3xl'>
                        ${Details.price}
                    </p>
                <div className='flex gap-5'>
            <div className='flex gap-2 justify-center items-center'>
            <button className='bg-gray-200 border-radues-3 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
            <span className='bg-gray-200 border-radues-3 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
            <button className='bg-gray-200 border-radues-3 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'onClick={handleMinusQuantity}>-</button>
            </div>
            <button className='bg-gray-300  border-radues-4 px-7 py-3 rounded-xl' onClick={handleAddToCart}>
                Add To Cart
            </button>
                </div>
        <p>
            {Details.description}
        </p>

</div>
                </div>
        </div>
    )
}
export default Details;
