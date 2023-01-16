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
"tuesday 2PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your county election office. Check addresses at https://www.sos.state.mn.us/elections-voting/find-county-election-office/",
"tuesday 3PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your county election office"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Minnesota() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>MINNESOTA</Typography>
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
            <ListItem>2. Complete an absentee ballot application:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               You must fill out the <b>Minnesota Absentee Ballot Application</b> or call your municipal clerk no later that Nov 8th 2PM.
                            </ListItem>
                        </Box>
                    </ListItem> 
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                               You must also fill out the <b>Request for Agent Delivery of Absentee Form</b>, specifying the health care facility where you are hospitalized and the name of your authorized agent
                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                
            </ListItem>
            <ListItem>3. Return ballot application to Board of Canvassers by <b>November 8th 2PM</b>. 
            Check <a href="https://www.sos.state.mn.us/elections-voting/find-county-election-office/">sos.state.mn.us/elections-voting/find-county-election-office/</a> for addresses. You may deliver your ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent, such as a family member. However, Minnesota allows anybody above 18 with a preexisting relationship to serve as your agent.

                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You may also apply electronically: <a href="https://mnvotes.gov">mnvotes.gov</a>. 

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
            <ListItem>4. Receive your ballot through your agent, by mail, or (if you are hospitalized in the same city or town) 
                through a bipartisan in-person ballot delivery team who will deliver your ballot directly to your hospital bed.
            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to Board of Canvassers by <b>November 8th 3PM</b> by authorized agent. 
            Check <a href="https://www.sos.state.mn.us/elections-voting/find-county-election-office/">sos.state.mn.us/elections-voting/find-county-election-office/</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Minnesota;