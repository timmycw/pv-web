import React from "react";
import Typography from '@mui/material/Typography';
import JoinForm from '../components/JoinForm';

import samplematerials1 from '../images/samplematerials1.png';
import samplematerials2 from '../images/samplematerials2.png';
import samplematerials3 from '../images/samplematerials3.png';


function Join() {
  return (
    <div className="Body">
        <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>Get Involved</Typography>
        <br></br>
        <Typography variant="body1">
          Joining Patient Voting can be as easy as committing to tell your patients about their right to vote and directing them to info on our page, 
          or as involved as organizing your own Patient Voting team within your hospital. We ask that by joining, 
          you commit to our non-partisan mission to encourage all patients to vote, regardless of their party affiliation.
        </Typography>

        <br></br>
        <Typography variant="body1">
          Fill out the form below or email us directly at <a href="mailto:patientvoting@gmail.com">patientvoting@gmail.com</a>.
        </Typography>
        <br></br>
        <center><JoinForm/></center>
        <br></br>
        <br></br>

        <Typography variant="h4" align="center">Sample Materials</Typography>
        <br></br>
        <Typography variant="body1">
          We have stickers, flyers, and business card size information brochures that you can share with your patients and 
          your hospital. Any of these can be customized to include your hospital's name/logo, phone numbers. 
          Just make sure to get permission from your hospital before distributing information with their name/logo!
        </Typography>
        <br></br>
        <img src={samplematerials1} />
        <img src={samplematerials2} />
        <br></br>
        <br></br>
        <center><img src={samplematerials3}/></center>
        
    </div>
  );
}

export default Join;