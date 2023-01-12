import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import process from '../images/process.png';
import comparison from '../images/comparison.png';

function HowItWorks() {
  return (
    <div className="Body">
        <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>How Does Patient Voting Work?</Typography>
      <br></br>
      <Typography variant="body1">
        Patient Voting helps patients vote by using an <b>Emergency Absentee Ballot</b>. 
        An Emergency Absentee Ballot is available in most states, but few people have heard of it.
        <br></br>
        <br></br>
        Most people are familiar with regular absentee ballots, which are intended for people 
        (members of the military, college students) who know ahead of time that they will not be able to make it 
        to the polls on Election Day. When patients are unexpectedly hospitalized, they likely did not make arrangements 
        to vote by regular absentee ballot. Emergency Absentee Ballots are used when a registered voter realizes that 
        they will be unable to make it to the polls, but it is too late to apply for regular absentee ballots.
        <br></br>
        <br></br>
        According to the National Conference of State Legislatures:
        
        <blockquote>"Requirements to qualify for an emergency ballot vary, 
        but the most common reason that states permit a voter to use this option is due to a medical emergency such as 
        unforeseen illness, confinement to a medical facility, disabilities or accidents resulting in injury."</blockquote>
        <br></br>
        <br></br>
        There are different deadlines and processes, depending on the state. 
        Check out the <a href="/States">individual state pages</a> for more information on the Patient Voting process in your state. 
      </Typography>   
      <br/>
      <div className="process-images">
        <center> 
          <img src={comparison} width="60%"></img>
        </center> 
        <br/>
        <center>
          <img src={process} width="60%"></img>
        </center>
      </div>
    </div>
  );
}

export default HowItWorks;