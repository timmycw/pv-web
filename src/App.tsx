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
import Colorado from './pages/states/Colorado';
import Connecticut from './pages/states/Connecticut';
import Delaware from './pages/states/Delaware';
import DistrictofColumbia from './pages/states/DistrictofColumbia';
import Florida from './pages/states/Florida';
import Georgia from './pages/states/Georgia';
import Hawaii from './pages/states/Hawaii';
import Idaho from './pages/states/Idaho';
import Illinois from './pages/states/Illinois';
import Indiana from './pages/states/Indiana';
import Iowa from './pages/states/Iowa';
import Kansas from './pages/states/Kansas';
import Kentucky from './pages/states/Kentucky';
import Louisiana from './pages/states/Louisiana';
import Maine from './pages/states/Maine';
import Maryland from './pages/states/Maryland';
import Massachusetts from './pages/states/Massachusetts';
import Michigan from './pages/states/Michigan';
import Minnesota from './pages/states/Minnesota';
import Mississippi from './pages/states/Mississippi';
import Missouri from './pages/states/Missouri';
import Montana from './pages/states/Montana';
import Nebraska from './pages/states/Nebraska';
import Nevada from './pages/states/Nevada';
import NewHampshire from './pages/states/NewHampshire';
import NewJersey from './pages/states/NewJersey';
import NewMexico from './pages/states/NewMexico';
import NewYork from './pages/states/NewYork';
import NorthCarolina from './pages/states/NorthCarolina';
import NorthDakota from './pages/states/NorthDakota';
import Ohio from './pages/states/Ohio';
import Oklahoma from './pages/states/Oklahoma';
import Oregon from './pages/states/Oregon';
import Pennsylvania from './pages/states/Pennsylvania';
import RhodeIsland from './pages/states/RhodeIsland';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import '@fontsource/roboto';

import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#44556B",
    },
    secondary: {
      main: '#f56c49',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
    h3: {
      color: "#44556B",
    },
    h4: {
      color: "#44556B",
      fontWeight: "bold",
    },
    h5: {
      color: "#44556B",
    },
    h6: {
      color: "#44556B",
    },
    button: {
      fontWeight: "bold",
    }
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
          <Route path="/States/Colorado" element={<Colorado />} />
          <Route path="/States/Connecticut" element={<Connecticut />} />
          <Route path="/States/Delaware" element={<Delaware />} />
          <Route path="/States/District of Columbia" element={<DistrictofColumbia />} />
          <Route path="/States/Florida" element={<Florida />} />
          <Route path="/States/Georgia" element={<Georgia />} />
          <Route path="/States/Hawaii" element={<Hawaii />} />
          <Route path="/States/Idaho" element={<Idaho />} />
          <Route path="/States/Illinois" element={<Illinois />} />
          <Route path="/States/Indiana" element={<Indiana />} />
          <Route path="/States/Iowa" element={<Iowa />} />
          <Route path="/States/Kansas" element={<Kansas />} />
          <Route path="/States/Kentucky" element={<Kentucky />} />
          <Route path="/States/Louisiana" element={<Louisiana />} />
          <Route path="/States/Maine" element={<Maine />} />
          <Route path="/States/Maryland" element={<Maryland />} />
          <Route path="/States/Massachusetts" element={<Massachusetts />} />
          <Route path="/States/Michigan" element={<Michigan />} />
          <Route path="/States/Minnesota" element={<Minnesota />} />
          <Route path="/States/Mississippi" element={<Mississippi />} />
          <Route path="/States/Missouri" element={<Missouri />} />
          <Route path="/States/Montana" element={<Montana />} />
          <Route path="/States/Nebraska" element={<Nebraska />} />
          <Route path="/States/Nevada" element={<Nevada />} />
          <Route path="/States/New Hampshire" element={<NewHampshire />} />
          <Route path="/States/New Jersey" element={<NewJersey />} />
          <Route path="/States/New Mexico" element={<NewMexico />} />
          <Route path="/States/New York" element={<NewYork />} />
          <Route path="/States/North Carolina" element={<NorthCarolina />} />
          <Route path="/States/North Dakota" element={<NorthDakota />} />
          <Route path="/States/Ohio" element={<Ohio />} />
          <Route path="/States/Oklahoma" element={<Oklahoma />} />
          <Route path="/States/Oregon" element={<Oregon />} />
          <Route path="/States/Pennsylvania" element={<Pennsylvania />} />
          <Route path="/States/RhodeIsland" element={<RhodeIsland />} />

        </Routes>   
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
