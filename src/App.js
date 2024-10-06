import React from 'react';
import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ScrollToTop /> {/* وضع ScrollToTop هنا لضمان عمله عند تغيير الصفحات */}
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/:slug' element={<Details />} />
              <Route path='/test' element={<Page1 />} />
              <Route path="/NewArrival" element={<NewArrival />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
