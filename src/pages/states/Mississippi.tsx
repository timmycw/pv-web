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


const deadlines = ["sunday", "SEP 25", 
"EMERGENCY APPLICATION START", "Mississippi does not have an emergency-specific absentee process but you may request an absentee ballot within 45 days of an election, with no deadline",
"tuesday 5PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your County Circuit Clerk's office. Check addresses at https://www.ms.gov/sos/voter_registration/documents/voter_registration_application.pdf",
"tuesday 5PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your County Circuit Clerk's office"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Mississippi() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>MISSISSIPPI</Typography>
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
            If you are <b>hospitalized between September 25th and November 8th</b>, you are eligible to vote by the following steps:
        
        
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
                               In order to initiate this process, please contact your County Circuit Clerk anytime within 45 days of an election and explain that you qualify for absentee ballot due to your hospitalization
                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                
                
            </ListItem>
            <ListItem>3. Return ballot application to your County Circuit Clerk's office with enough time to return your ballot 
                by <b>November 8th 5PM</b>. Check <a href="https://www.ms.gov/sos/voter_registration/documents/voter_registration_application.pdf">ms.gov/sos/voter_registration/documents/voter_registration_application.pdf</a> for addresses. You may deliver your ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent, such as a family member. However, anyone may serve as your authorized agent in Mississippi.

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
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>
                               There is no electronic submission of applications allowed in Mississippi.

                            </ListItem>
                        </Box>
                    </ListItem>
                   
       
                </List>
            </ListItem>
            <ListItem>4. Receive your ballot. Your ballot must be obtained by mail.

            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to your County Circuit Clerk's office by <b>November 8th 5PM</b> by mail.  
            Your ballot must be postmarked by <b>November 8th</b> and be received by <b>November 15th</b>.
            Check <a href="https://www.ms.gov/sos/voter_registration/documents/voter_registration_application.pdf">ms.gov/sos/voter_registration/documents/voter_registration_application.pdf</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Mississippi;