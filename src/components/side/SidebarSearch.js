import React, { useState } from 'react';
import { Box, InputBase, IconButton, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SidebarSearch = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false); // حالة لتتبع فتح/إغلاق القائمة
  const categories = ['T-shirts', 'Dresses', 'Pants', 'Bracelet', 'Pyjama', 'c-Beach', 'Bags'];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setOpen(true); // فتح القائمة عند إدخال نص
  };

  const handleCategoryClick = (category) => {
    onFilterChange([category]);

    // تمرير الصفحة إلى قسم المنتجات
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      window.scrollTo({
        top: productsSection.offsetTop,
        behavior: 'smooth'
      });
    }

    setSearchTerm(''); // مسح نص البحث
    setOpen(false); // إغلاق القائمة
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: '20px', width: '100%', maxWidth: '250px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '4px 8px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <InputBase
          placeholder="Search for product ..."
          value={searchTerm}
          onChange={handleSearch}
          sx={{ flex: 1, padding: '5px 10px' }}
        />
        <IconButton sx={{ p: '10px' }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {open && searchTerm && (
        <List sx={{ marginTop: '10px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)' }}>
          {filteredCategories.map((category, index) => (
            <ListItem button key={index} onClick={() => handleCategoryClick(category)}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SidebarSearch;
