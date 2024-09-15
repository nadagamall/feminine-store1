import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMode, ColorModeContext } from './theme';  
import Layout from './components/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './components/page1';
import ScrollToTop from './components/scroll/ScrollToTop';
import NewArrival from './components/NewArrival';

function App() {
  const [theme, colorMode] = useMode();
  React.useEffect(() => {
    localStorage.setItem('mode', theme.palette.mode);
  }, [theme.palette.mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/:slug' element={<Details />} /> 
              <Route path='/test' element={<Page1 />} />
              <Route path="/products/:category" element={<NewArrival />} />

            </Route>
          </Routes>
        </BrowserRouter>
<ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;
