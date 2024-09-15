import React from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../Products';

const NewArrival = () => {
  const { category } = useParams(); // الحصول على الفئة من URL
  const filteredProducts = Products.filter((product) => product.category === category);

  return (
    <div>  
      <h1>{category} Products</h1>
      <div className="product-grid">
      {filteredProducts.length > 0 ?
      ( filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <h2>{product.name}</h2>
              <p>{product.price} $</p>
              <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
            </div>
             ))
            ) : (
              <p>No products available in this category.</p>
            )}
      </div>
    </div>
  );
};

export default NewArrival;
