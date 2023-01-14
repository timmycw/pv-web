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


const deadlines = ["friday", "NOV 3", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals.",
"monday 5PM", "NOV 7", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to one of your County Clerks. Check addresses at https://voteidaho.gov/county-clerks/.", 
"tuesday 8PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your County Clerks."];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Idaho() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>IDAHO</Typography>
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
            <ListItem>2. Complete an application for your emergency absentee ballot:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                This application is not available online so you will have to contact your County Clerk for the necessary documentation to fill out.
                            </ListItem>
                        </Box>
                    </ListItem>
                            
                </List>
                
            </ListItem>
            <ListItem>3. Return ballot application to your County Clerk with enough time to return your ballot by <b>November 8th 8PM</b>.
                 Check <a href="https://idahovotes.gov/county-clerks/">idahovotes.gov/county-clerks</a> for addresses. You may deliver your ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You may submit your application to your County Clerk by email.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                You may submit your application by mail. Depending on when you're hospitalized, if you submit your ballot application by mail, it may not arrive in time to the BOE by the required deadline.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>
                                You may not submit your application via an authorized agent.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
            
            </ListItem>
            <ListItem>4. Receive ballot. You may obtain your ballot by mail or, in certain counties, through personal delivery by an in-person ballot delivery team sent by your County Clerk.
            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to Board of Canvassers by <b>November 8th 8PM</b> by mail or via the in-person ballot 
                delivery team sent to you. Check <a href="https://idahovotes.gov/county-clerks/">idahovotes.gov/county-clerks</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Idaho;