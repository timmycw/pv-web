import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Testimonials from "../components/Testimonials";
import { purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import '../App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#11cb5f',
      
      
    },
    secondary: {
      // This is green.A700 as hex.
      main: purple[500],
      
    },
  },
});


function Home() {
  return (
    
    <ThemeProvider theme={theme}>  
      <div className="Body">

      <Typography variant="h5" align="center">Welcome to</Typography>
      <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>Patient Voting</Typography>
      <br></br>
      <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}>Our Mission</Typography>
      <br></br>
      <Typography variant="body1">
        Founded in 2018, Patient Voting is a non-partisan effort to heighten awareness of patients' rights and 
        increase voter turnout. We organize public information and provide free materials so more registered voters 
        can cast their ballots if they are unexpectedly hospitalized in the days and weeks prior to the election.  
      </Typography>
      
      
      <br></br>
      <Typography variant="body1">
        In most states, patients are able to vote from their hospital bed through <a href="">Emergency Absentee Ballots</a>.
        We are creating a nation-wide network of healthcare workers and non-medical individuals dedicated to making sure 
        this happens if patients (and sometimes even their loved ones are interested), and making this process as easy as possible 
        so that patients can focus on their health and recovery.
      </Typography>
      <br></br>
      <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}>What We Provide</Typography>
      <br></br>
      <Typography variant="body1">
        
        <b>All of the info in one centralized location for patients, loved ones, and health care workers</b>
        <br></br>
            The exact process for Emergency Absentee Ballots varies from state-to-state. 
            All of this info is scattered on 50 different state election websites (if you can even find it!).
            It's all centralized here on http://patientvoting.com so it's easy for patients, their loved ones, and health care workers to find it.
        
        <br></br>
        <b>A Patient Voting plan unique to your hospital.</b>
        <br></br>
        We can schedule a call with your dedicated team to 
        learn more about your hospital and how this would work best. We can customize materials specific to your hospital's plan.
        <br></br>
        <b>Free customized templates for voting materials featuring your hospital logo and branding</b>
        <br></br>
        <b>State-by-state information for you to include on your hospital intranet, newsletter, department emails, weekly bulletins, etc.</b>
        <br></br>
      </Typography>


      <br></br>
      <br></br>
      <br></br>

      <Box sx={{display: "flex", justifyContent: "center"}}>
        <Button href="/How it Works" size="large" color="secondary" variant="outlined"> Learn how patient voting works </Button>
      </Box>
      <br></br>
      <br></br>
      <br></br>
    

      <Testimonials />
      <br></br>
      <br></br>
    </div>
    </ThemeProvider>
  );
}

export default Home;