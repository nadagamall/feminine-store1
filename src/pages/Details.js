import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../Products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/Cart';

const Details = () => {
    const { slug } = useParams();
    const [Details, setDetails] = useState([]);
    const [quantity, setQuantity] = useState(1);  // اجعل القيمة الأولية 1
    const dispatch = useDispatch();
  
    useEffect(() => {
        const findDetails = Products.filter(Product => Product.slug === slug);
        if (findDetails.length > 0) {
            setDetails(findDetails[0]);
        } else {
            window.location.href = '/';
        }
    }, [slug]);

    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    };

    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (Details) {
            dispatch(addToCart({
                productId: Details.id,
                quantity: quantity,
            }));
        }
    };

    if (!Details) return null;
    
    return (
        <div className="p-4">
            <h2 className="text-2xl sm:text-3xl text-center pt-4">PRODUCT DETAIL</h2>
            
            <div className="flex flex-col md:grid md:grid-cols-2 gap-5 mt-5">
                {/* صورة المنتج */}
                <div className="w-full h-auto flex justify-center">
                    <img 
                        src={Details.image} 
                        alt={Details.name} 
                        className="w-full max-w-lg h-auto sm:h-[500px] md:h-[600px] object-contain"
                    />
                </div>
                
                {/* تفاصيل المنتج */}
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-xl sm:text-2xl"> {Details.name}</h1>
                    <p className="font-bold text-xl sm:text-3xl">${Details.price}</p>
                    
                    <div className="flex gap-5">
                        {/* التحكم بالكمية */}
                        <div className="flex gap-2 justify-center items-center">
                            <button className="bg-gray-200 h-full w-8 sm:w-10 font-bold text-lg sm:text-xl rounded-xl flex justify-center items-center" onClick={handlePlusQuantity}>+</button>
                            <span className="bg-gray-200 h-full w-8 sm:w-10 font-bold text-lg sm:text-xl rounded-xl flex justify-center items-center">{quantity}</span>
                            <button className="bg-gray-200 h-full w-8 sm:w-10 font-bold text-lg sm:text-xl rounded-xl flex justify-center items-center" onClick={handleMinusQuantity}>-</button>
                        </div>
                        
                        {/* زر إضافة إلى السلة */}
                        <button className="bg-gray-300 px-5 py-2 sm:px-7 sm:py-3 rounded-xl" onClick={handleAddToCart}>
                            Add To Cart
                        </button>
                    </div>
                    
                    <p className="text-sm sm:text-base">
                        {Details.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Details;
