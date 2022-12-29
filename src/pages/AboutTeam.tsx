import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TeamMember from '../components/TeamMember';
import MemberData from '../assets/member-data.json';

function AboutTeam() {
  return (
    <div className="Body">
        <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>Our Team</Typography>
        <br></br>
        <Typography variant="h4" sx={{fontWeight: "bold"}}>2022 Team</Typography>
        <br></br>
        <div className="team-card-gallery">
          {MemberData.map((item, i) => (
            <TeamMember member={item}></TeamMember>
           ))} 
        </div>
    </div>
  );
}

export default AboutTeam;