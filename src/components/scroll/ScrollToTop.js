import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger'; 
import Zoom from '@mui/material/Zoom'; 
import Fab from '@mui/material/Fab'; 
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
      threshold: 500,
  });

  return (
    <Zoom in={trigger}>
      <div>
        <Fab
          onClick={() => {
            // استخدام scrollTo مع خاصية behavior: 'smooth' لجعل التمرير سلس
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          variant="extended"
          size="small"
          sx={{ position: "fixed", bottom: 33, right: 33 }}
          color="primary"
          aria-label="scroll to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </div>
    </Zoom>
  );
}

export default ScrollToTop;
