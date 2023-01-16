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


const deadlines = ["tuesday", "NOV 1", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals",
"tuesday 5PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your county clerk's office. Check addresses at https://www.nvsos.gov/sos/elections/voters/county-clerk-contact-information",
"tuesday 5PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Your voted ballot will be returned automatically by the in-person ballot delivery team that delivered you the ballot "];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function NewJersey() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>NEVADA</Typography>
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
            If you are <b>hospitalized between November 1st and November 8th</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete an emergency absentee ballot application:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                               Please contact your county clerk or registrar to initiate the process and inquire about any documentation you must fill out.
                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                
                
            </ListItem>
            <ListItem>3. Return ballot application to Board of Canvassers by <b>November 8th 5PM</b>. 
                Check <a href="https://www.nvsos.gov/sos/elections/voters/county-clerk-contact-information">nvsos.gov/sos/elections/voters/county-clerk-contact-information</a> for addresses. You may deliver your ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent, such as a family member. However, NewJersey allows anyone to serve as your authorized agent.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You may alternatively submit your application electronically.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                               By mail. Depending on when you're hospitalized, if you submit your ballot application by mail, it may not arrive in time to the BOE by the required deadline.

                            </ListItem>
                        </Box>
                    </ListItem>
                   
       
                </List>
            </ListItem>
            <ListItem>4. Your ballot will be delivered to you in your hospital bed by a bipartisan in-person ballot delivery team, sent by your county clerk.

            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. After you have filled out your ballot, it will automatically be returned to be counted by your ballot delivery team.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default NewJersey;