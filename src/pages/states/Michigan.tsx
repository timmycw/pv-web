import React from "react";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DangerousIcon from '@mui/icons-material/Dangerous';

import logo from '../../images/statepvlogo.png';

import {styled} from '@mui/material/styles';


import Deadlines from '../../components/Deadlines';


const deadlines = ["friday 4PM", "NOV 4", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals",
"tuesday 4PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", "A written request for the emergency absentee ballot to your city or township clerk's office before 4PM on election day.",
"tuesday 8PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Emergency ballots must be returned to the clerk's office by 8PM on election day. Clerks info at mi.gov/vote"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Michigan() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>MICHIGAN</Typography>
                    <Typography variant="h6" sx={{color: '#f56c49'}}>PATIENT VOTING PROCESS</Typography>
                </Box>
            </Box>
            <Box>
                <img src={logo} width="80%"/>
            </Box>
        </Box>
        <br/>
            <Deadlines {...deadlines}></Deadlines>
        <br/>
        
        <br/>
        <Typography fontSize="18px" >
            If you are <b>hospitalized between November 4th at 5PM and Election Day on November 8th</b>, you are eligible to vote by the following steps:

            
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               You are also eligible if a family death or illness that requires you to leave your community for the entire time the polls are open on election day.
                            </ListItem>
                        </Box>
                    </ListItem> 
                
            
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Print a regular absentee ballot application from our Michigan state page
                or at: <a href="https://www.michigan.gov/documents/sos/AVApp_535884_7.pdf">michigan.gov/documents/sos/AVApp_535884_7.pdf</a>.
                <br/><br/>
                You may download the regular absentee application from online and write 'Emergency' on the top of the regular absentee ballot application.

                
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               Additionally, we recommend an additional piece of paper for clarity, with the following written: 
                               "I have been unexpectedly hospitalized at [NAME OF] Hospital starting on [DATE] and expect that I will be unable to make it to the polls on Election Day. I am requesting an Emergency Absentee Ballot."
                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                
                The patient needs to designate an authorized representative, who must complete Section 5 of the 2022 Michigan 
                Absent Voter Ballot Application stating "...I am delivering the absentee voter ballot application of [PATIENT NAME] 
                at his or her request..."

            </ListItem>
            <ListItem>3. Your authorized representative must deliver the above to your city or township clerk's office before 
                4 p.m. on election day. Find your clerks address at: <a href="mi.gov/vote">mi.gov/vote</a>.

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>
                                There is no mail submission of emergency application/ballots in Michigan.


                            </ListItem>
                        </Box>
                    </ListItem>
                        
                  </List>
            </ListItem>
            <ListItem>4. Receive ballot from your authorized agent.

            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to Board of Canvassers by <b>Election Day on November 8th 8PM</b> by authorized agent.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Michigan;