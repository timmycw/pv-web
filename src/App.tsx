import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { red, purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import States from './pages/States';
import Home from './pages/Home';
import Join from './pages/Join';
import HowItWorks from './pages/HowItWorks';
import HowToVote from './pages/HowToVote';
import AboutTeam from './pages/AboutTeam';
import AboutProjects from './pages/AboutProjects';
import AboutOrganizations from './pages/AboutOrganizations';

import Alabama from './pages/states/Alabama';
import Alaska from './pages/states/Alaska';
import Arizona from './pages/states/Arizona';
import Arkansas from './pages/states/Arkansas';
import California from './pages/states/California';
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
          <Route path="/How to Vote" element={<HowToVote />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/States" element={<States />} />
          <Route path="/AboutTeam" element={<AboutTeam />} />
          <Route path="/AboutProjects" element={<AboutProjects />} />
          <Route path="/AboutOrganizations" element={<AboutOrganizations />} />

          <Route path="/States/Alabama" element={<Alabama />} />
          <Route path="/States/Alaska" element={<Alaska />} />
          <Route path="/States/Arizona" element={<Arizona />} />
          <Route path="/States/Arkansas" element={<Arkansas />} />
          <Route path="/States/California" element={<California />} />

        </Routes>   
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
