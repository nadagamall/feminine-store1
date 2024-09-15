import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Products } from '../Products';
import ProductCart from '../components/ProductCart';
import SidebarSearch from '../components/side/SidebarSearch';  // استيراد SidebarSearch
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { useLocation } from 'react-router-dom';
import Complex from '../components/Complex';

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [showSlider, setShowSlider] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setShowSlider(true);
    } else {
      setShowSlider(false);
    }
  }, [location.pathname]);

  const handleFilterChange = (filters) => {
    const filtered = Products.filter((product) =>
      filters.length === 0 ? true : filters.includes(product.category)
    );
    setFilteredProducts(filtered);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* تمرير handleFilterChange إلى SidebarSearch */}
      <SidebarSearch onFilterChange={handleFilterChange} />
      <Box
        sx={{
          flexGrow: 1,
          padding: '20px',
          backgroundColor: 'background.default',
          color: 'text.primary',
          position: 'relative',
        }}
      >
        {showSlider && (
          <Box mb={4}>
            <ImageSlider
              sx={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                height: '400px', 
                zIndex: 1,
              }}
            />
          </Box>
        )}

        <Complex mb={4} />

        <div>
          <h1 className="text-3xl my-5">List Products</h1>
        </div>
        <div id="products-section" className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {filteredProducts.map((product, key) => (
            <ProductCart key={key} data={product} />
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Home;
