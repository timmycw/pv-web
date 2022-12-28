import React from 'react';
import Navbar from './components/Navbar';
import { red, purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import States from './pages/States';
import Home from './pages/Home';
import Join from './pages/Join';
import HowItWorks from './pages/HowItWorks';
import AboutTeam from './pages/AboutTeam';
import AboutProjects from './pages/AboutProjects';
import AboutOrganizations from './pages/AboutOrganizations';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#11cb5f',
      
      
    },
    secondary: {
      // This is green.A700 as hex.
      main: purple[500],
      
    },
  },
});


function App() {
  return (
    
    <ThemeProvider theme={theme}>
        <Navbar/> 
        <Routes>
          
          <Route path="/Home" element={<Home />} />
          <Route path="/How it Works" element={<HowItWorks />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/States" element={<States />} />
          <Route path="/AboutTeam" element={<AboutTeam />} />
          <Route path="/AboutProjects" element={<AboutProjects />} />
          <Route path="/AboutOrganizations" element={<AboutOrganizations />} />

        </Routes>   
    </ThemeProvider>
  );
}

export default App;
