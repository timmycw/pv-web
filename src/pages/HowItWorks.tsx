import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
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

      <br/><br/><br/><br/>
    
      <Box>
        <Typography variant="h4">Our Own Candidates</Typography>
        <br/>
         
        <Box sx={{display: "flex"}}>
          <Box sx={{width: "30%"}}>
            <Typography variant="h6">Who is our audience?</Typography>
            
          </Box>
          <Divider orientation="vertical" flexItem sx={{backgroundColor: "black", borderLeftWidth: 3, marginRight: "5%"}}/>
          <Box sx={{width: "60%"}}>
              <Typography variant="body1">
              Here at Patient Voting, we focus on two main groups:
              <ol>
              <li>Patients hospitalized in the weeks and days prior to the election, who are anticipated to be still hospitalized on Election Day.</li>
              <li>People who were discharged from the hospital in the days prior to the election, whose acute illness may still prevent them from being able to travel to the polls on election day.</li>
              </ol>
              Below we focus on the process for hospitalized patients.</Typography>
          </Box>
        </Box>
        <br/><br/><br/>
        <Typography variant="h4">Screening</Typography>
        <br/>
        <Box sx={{display: "flex"}}>
          <Box sx={{width: "30%"}}>
            <Typography variant="h6">Who is eligible?</Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{backgroundColor: "black", borderLeftWidth: 3, marginRight: "5%"}}/>
          <Box sx={{width: "60%"}}>
              <Typography variant="body1">
              Patients who are admitted to the hospital in the weeks and days prior to the election, who are likely to be 
              still hospitalized on Election Day, are good candidates for Patient Voting.
              <br/><br/>
              To be eligible to vote by emergency absentee ballot, patients must be registered voters. Step one is to 
              verify the patients status as a registered voter at <a href="Vote.org/">Vote.org</a> or various state-specific websites 
              (available on <a href="/States">each state's information page</a> if applicable). 
              <br/><br/>
              There are various programs to increase voter registration among emergency room patients, 
              including <a href="https://vot-er.org/">vot-er.org</a>.
​              <br/><br/>
              <b>VOTE RIDERS</b>: 
              <br/>
              Make sure to check if your state requires a Voter ID. <a href="https://www.voteriders.org/staterules/">HERE</a> is our link to our digital cards for all 50 states. 
              For Spanish click HERE. You can also get your Voter ID questions answered through this link: 
              <a href="https://www.messenger.com/t/VoteRiders">messenger.com/t/VoteRiders</a>. If you are requesting a mail in ballot and your state requires you to 
              send a copy of your voter ID but do not have access to a printer, you can send a picture to VoterID@voteriders.org 
              and we will mail you two hard copies. For up-to-date information and help with voter ID you can also call/text 
              VoteRiders: 844-338-8743 or visit <a href="voteriders.org">voteriders.org</a>.</Typography>
          </Box>
        </Box>
        <br/><br/><br/>
        <Typography variant="h4">Consent</Typography>
        <br/>
        <Box sx={{display: "flex"}}>
          <Box sx={{width: "30%"}}>
            <Typography variant="h6">Are patients or families interested?</Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{backgroundColor: "black", borderLeftWidth: 3, marginRight: "5%"}}/>
          <Box sx={{width: "60%"}}>
              <Typography variant="body1">
               Just like any other medical procedure, it is important to ask patients and their family members if 
               they would be interested in Patient Voting.
​               <br/><br/>
                In some states (AL, AZ, CA, CO, DE, HI, KY, LA, MD, MI, MS, MI, NE, NH, NJ, NY, NC, ND, OR, PA, RI, 
                TN, TX, VT, VA, WA, WY), family members of hospitalized patients are also able to vote by Emergency Absentee Ballot. 
​                <br/><br/>
                Team members can admitted patients and their family members either in the emergency department or on 
                in-patient floors to ask if they would be interested in receiving information about voting while hospitalized. 
                We respect "no" as answer: being admitted to the hospital with an acute illness or condition may 
                be overwhelming and leave little time to think of other things. 
              </Typography>
          </Box>
        </Box>
        <br/><br/><br/>
        <Typography variant="h4">Information</Typography>
        <br/>
        <Box sx={{display: "flex"}}>
          <Box sx={{width: "30%"}}>
            <Typography variant="h6">How can we empower patients and their family members?</Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{backgroundColor: "black", borderLeftWidth: 3, marginRight: "5%"}}/>
          <Box sx={{width: "60%"}}>
              <Typography variant="body1">
              If the answer is "yes" (and we hope it is!), our team provides the patient and their family information on 
              state-specific instructions on voting processes, links to this site, and contact information for in-hosptial 
              staff who can assist them with obtaining and returning the application and ballot to the Board of Elections.

​               <br/>

              Check out What We Provide for free printable resources for patients. 
              </Typography>
          </Box>
        </Box>
        <br/><br/><br/>
        <Typography variant="h4">Coordination</Typography>
        <br/>
        <Box sx={{display: "flex"}}>
          <Box sx={{width: "30%"}}>
            <Typography variant="h6">How can we make the process easier?</Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{backgroundColor: "black", borderLeftWidth: 3, marginRight: "5%"}}/>
          <Box sx={{width: "60%"}}>
              <Typography variant="body1">
              In many states, successful voting by Emergency Absentee Ballot requires several trips to and from the election 
              office in order to deliver the application, pick up the ballot, then deliver the ballot. We encourage patients 
              to their support system (family and friends) to serve as this authorized messenger. However, where appropriate, 
              we can work with your health care system to identify who in your team can serve as authorized messengers.
              </Typography>
          </Box>
        </Box>


      </Box>
    </div>
  );
}

export default HowItWorks;