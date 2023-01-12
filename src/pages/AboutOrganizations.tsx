import React from "react";
import Typography from '@mui/material/Typography';
import VOTER from "../images/VOTER.png";
import cp from "../images/cp.png";
import action from "../images/action.png";
import votehealth from "../images/votehealth.png";
import cvh from "../images/cvh.png";
import voteriders from "../images/voteriders.png";
import amda from "../images/amda.png";
import retireguide from "../images/retireguide.png";
import parm from "../images/parm.png";

function AboutOrganizations() {
  return (
    <div className="Body">
      <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>Partner Organizations</Typography>
        <img src={VOTER} width="33%"/>
        <img src={cp} width="33%"/>
        <img src={action} width="33%"/>
        <img src={votehealth} width="33%"/>
        <img src={cvh} width="33%"/>
        <img src={voteriders} width="33%"/>
        <img src={amda} width="33%"/>
        <img src={retireguide} width="33%"/>
        <img src={parm} width="33%"/>
    </div>
  );
}

export default AboutOrganizations;