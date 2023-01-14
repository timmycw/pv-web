import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import {styled} from '@mui/material/styles';

const StateButton = styled(Button)(({ theme }) => ({
  height:"18%",
  width: "15%",
  border: "2px solid",
  marginBottom: "2%",
  fontSize: "16px",
  "&:hover": {
              fontWeight: "bold",
              },
}));

function States() {
  return (
    <div className="Body">
        <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>States</Typography>
        <br/>
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>

          <StateButton href="/States/Alabama">Alabama</StateButton>
          <StateButton href="/States/Alaska">Alaska</StateButton>
          <StateButton href="/States/Arizona">Arizona</StateButton>
          <StateButton href="/States/Arkansas">Arkansas</StateButton>
          <StateButton href="/States/California">California</StateButton>

          <StateButton href="/States/Colorado">Colorado</StateButton>
          <StateButton href="/States/Connecticut">Connecticut</StateButton>
          <StateButton href="/States/Delaware">Delaware</StateButton>
          <StateButton href="/States/District of Columbia">District of Columbia</StateButton>
          <StateButton href="/States/Florida">Florida</StateButton>

          <StateButton href="/States/Georgia">Georgia</StateButton>
          <StateButton href="/States/Hawaii">Hawaii</StateButton>
          <StateButton href="/States/Idaho">Idaho</StateButton>
          <StateButton href="/States/Illinois">Illinois</StateButton>
          <StateButton href="/States/Indiana">Indiana</StateButton>

          <StateButton href="/States/Iowa">Iowa</StateButton>
          <StateButton href="/States/Kansas">Kansas</StateButton>
          <StateButton href="/States/Kentucky">Kentucky</StateButton>
          <StateButton href="/States/Louisiana">Louisiana</StateButton>
          <StateButton href="/States/Maine">Maine</StateButton>

          <StateButton href="/States/Maryland">Maryland</StateButton>
          <StateButton href="/States/Massachusetts">Massachusetts</StateButton>
          <StateButton href="/States/Michigan">Michigan</StateButton>
          <StateButton href="/States/Minnesota">Minnesota</StateButton>
          <StateButton href="/States/Mississippi">Mississippi</StateButton>

          <StateButton href="/States/Missouri">Missouri</StateButton>
          <StateButton href="/States/Montana">Montana</StateButton>
          <StateButton href="/States/Nebraska">Nebraska</StateButton>
          <StateButton href="/States/Nevada">Nevada</StateButton>
          <StateButton href="/States/New Hampshire">New Hampshire</StateButton>

          <StateButton href="/States/New Jersey">New Jersey</StateButton>
          <StateButton href="/States/New Mexico">New Mexico</StateButton>
          <StateButton href="/States/New York">New York</StateButton>
          <StateButton href="/States/North Carolina">North Carolina</StateButton>
          <StateButton href="/States/North Dakota">North Dakota</StateButton>

          <StateButton href="/States/Ohio">Ohio</StateButton>
          <StateButton href="/States/Oklahoma">Oklahoma</StateButton>
          <StateButton href="/States/Oregon">Oregon</StateButton>
          <StateButton href="/States/Pennsylvania">Pennsylvania</StateButton>
          <StateButton href="/States/Rhode Island">Rhode Island</StateButton>

          <StateButton href="/States/Ohio">Ohio</StateButton>
          <StateButton href="/States/Oklahoma">Oklahoma</StateButton>
          <StateButton href="/States/Oregon">Oregon</StateButton>
          <StateButton href="/States/Pennsylvania">Pennsylvania</StateButton>
          <StateButton href="/States/Rhode Island">Rhode Island</StateButton>

          <StateButton href="/States/South Carolina">South Carolina</StateButton>
          <StateButton href="/States/South Dakota">South Dakota</StateButton>
          <StateButton href="/States/Tennessee">Tennessee</StateButton>
          <StateButton href="/States/Texas">Texas</StateButton>
          <StateButton href="/States/Utah">Utah</StateButton>

          <StateButton href="/States/Vermont">Vermont</StateButton>
          <StateButton href="/States/Virginia">Virginia</StateButton>
          <StateButton href="/States/Washington">Washington</StateButton>
          <StateButton href="/States/West Virginia">West Virginia</StateButton>
          <StateButton href="/States/Wisconsin">Wisconsin</StateButton>

          <StateButton href="/States/Wyoming">Wyoming</StateButton>

         
        </Box>
    </div>
  );
}

export default States;