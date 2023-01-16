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


const deadlines = ["tuesday", "OCT 27", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals",
"tuesday 8PM", "NOV 3", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your local election office by authorized representative. Check addresses at https://www.sec.state.ma.us/ele/eleev/ev-find-my-election-office.htm",
"tuesday 8PM", "NOV 3", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your local election office"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Massachusetts() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>MASSACHUSETTS</Typography>
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
            If you are <b>hospitalized between October 29th and November 3rd</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete an absentee ballot application and for <b>Section 3 (Special Circumstances)</b> please fill out:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               <i>Voter has been admitted to a healthcare facility within 7 days of the election
                                and has designated the following person to hand-deliver the ballot</i>: 
                                Please fill out the name of your authorized agent (a family member) in this section.

                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                
                
            </ListItem>
            <ListItem>3. Return ballot application to your local elections office with enough time to return your ballot by <b>November 8th 8PM</b>. Check <a href="https://www.sec.state.ma.us/ele/eleev/ev-find-my-election-office.htm">sec.state.ma.us/ele/eleev/ev-find-my-election-office.htm</a> for addresses. You may deliver your ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent. Massachusetts requires your agent to be a family member. Patient Voting recommends this method.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                "Applications may also be submitted electronically by fax or e-mail, as long as the requester’s signature is visible." Please contact your  local election officials at www.sec.state.ma.us/ele or by calling 1-800-462-VOTE (8683) for email/fax and to clarify this process.

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
            <ListItem>4. Receive your ballot through your authorized agent or by mail.
            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to your local elections office by <b>November 8th 8PM</b> by authorized agent or
             mail. Check <a href="https://www.sec.state.ma.us/ele/eleev/ev-find-my-election-office.htm">sec.state.ma.us/ele/eleev/ev-find-my-election-office.htm</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Massachusetts;