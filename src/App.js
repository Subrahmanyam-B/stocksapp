import React from 'react'
import {Routes , Route , Link} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Homepage from './components/HomePage/Homepage'
import { Search , News} from './components';
import { useState } from 'react';
import StockInfo from './components/StockInfo';

import './App.css';
import { useEffect } from 'react';

const darkTheme = createTheme({
  palette: {

    mode: 'dark',
    background : {
      paper : '#2C2B30'
    }
  },
});



const App = () => {

  return (
    <ThemeProvider theme = {darkTheme}>
      <CssBaseline/>
    <div className="app">

      <div className="main">
          <div className="routes">
            <Routes>
              <Route path = "/" element = {<><Homepage/></>}/>
              <Route path = "/search" element = {<Search/>}/>
              <Route path = "/:stockID" element = {<StockInfo/>}/>
              <Route path = "/news" element = {<News/>}/>            
            </Routes>
          </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App