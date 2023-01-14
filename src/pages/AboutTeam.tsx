import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TeamMember from '../components/TeamMember';
import MemberData from '../assets/member-data.json';

import kelly from '../images/kelly.png';
import nicole from '../images/nicole.png';
import keyana from '../images/keyana.png';
import saba from '../images/saba.png';
import anita from '../images/anita.png';
import anna from '../images/anna.png';

const profilePics = [kelly, nicole, keyana, saba, anita, anna];

function AboutTeam() {
  return (
    <div className="Body">
        <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>Our Team</Typography>
        <br></br>
        <Typography variant="h4" sx={{fontWeight: "bold"}}>2022 Team</Typography>
        <br></br>
        <div className="team-card-gallery">
          {MemberData.map((item, i) => (
            <Box sx={{width: "30%", marginBottom: "5%"}}>
              <Card elevation={0} sx={{border: "2px solid #44556B", borderRadius: "5px"}}>
                <img src={profilePics[i]} width="100%" height="80%"/>
                <br/>
                <Typography variant="h5" sx={{fontWeight: "bold"}}>&nbsp; &nbsp;{item.name}</Typography>
                <br/>
                <Typography variant="body1" sx={{color: '#f56c49'}}>&nbsp; &nbsp; &nbsp;{item.role}</Typography>
              </Card>
            </Box>
           ))} 
        </div>
    </div>
  );
}

export default AboutTeam;