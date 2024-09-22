import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import summ from '../../assets/SUMMER_20240822_115329_0000.png'; 
import summer9 from '../../assets/SUMMER-9.jpg';
import back2 from '../../assets/202309200348_39848.png';

const slides = [summ, summer9, back2];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        display: { xs: 'none', sm: 'block' }, // إخفاء في الشاشات الصغيرة وعرضه في الشاشات الأكبر
      }}
    >
      <img
        src={slides[currentIndex]}
        alt="Slide"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color: theme.palette.text.primary,
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: theme.palette.text.primary,
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
