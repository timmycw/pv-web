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


const deadlines = ["thursday", "OCT 15", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals",
"monday", "NOV 2", 
"EMERGENCY APPLICATION DEADLINE", "You may request a ballot by sending an official Absentee Ballot Request (before Oct 30th) or contacting your county auditor directy (after Oct 30th and until Nov 2nd)",
"tuesday 8PM", "NOV 3", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your county auditor. Addresses can be found at https://sos.iowa.gov/elections/auditors/auditorslist.html"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Maryland() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>Maryland</Typography>
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
            If you are hospitalized <b>before November 1st</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete an application for your emergency absentee ballot.

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                               The method for submitting your application will be different depending on whether or not you are hospitalized before or after Oct 30th (please see step 3).
                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                
                
            </ListItem>
            <ListItem>3. Return ballot application to your county auditor by <b>November 2nd 4PM</b>. Addresses can be found at   
            <a href="https://sos.iowa.gov/elections/auditors/auditorslist.html"> sos.iowa.gov/elections/auditors/auditorslist.html</a>. You may deliver your ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent (ex. family member, although anyone may serve as your agent in Iowa). 
                                You are able to use this option up until <b>October 30th 5PM</b>.

                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                By mail. You are able to use this option up until <b>October 30th 5PM</b>. Depending on when you're 
                                hospitalized, if you submit your ballot application by mail, it may not arrive in time to the BOE by the required deadline.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               By phone. You are able to call your county auditor directly to request an absentee ballot if you are hospitalized on <b>Oct 31st or later</b>.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
       
                </List>
            </ListItem>
            <ListItem>4. Receive ballot. If you are hospitalized in the same county as your normal residence, you will 
                obtain your ballot through a bipartisan in-person ballot delivery team. Otherwise, you may obtain your ballot 
                through your authorized agent.

            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to your county auditor by Nov 3rd 8PM by mail, your authorized agent, 
                or your ballot delivery team (who will automatically deliver your ballot to be counted). Check  
                <a href="https://sos.iowa.gov/elections/auditors/auditorslist.html">sos.iowa.gov/elections/auditors/auditorslist.html</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Maryland;