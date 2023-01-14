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


const deadlines = ["saturday", "OCT 29", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals. This start date may be later depending on the county.",
"monday 7PM", "NOV 7", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your county's Supervisor of Elections.", 
"tuesday 7PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to Supervisor of Elections' office no later than 7:00 pm (local time) on Election Day."];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Florida() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>FLORIDA</Typography>
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
            If you are hospitalized between <b>October 29th and November 7th</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete an emergency ballot application. 
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You can fill out <b>Form DS-DE 37</b> indicating the designee who will be picking up your ballot.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                If you are making your request on Election Day itself, you must fill out a separate <b>Election Day Vote-by-Mail Ballot 
                                    Delivery Affidavit (Form DS-DE 136)</b> affirming that you have an emergency keeping you from voting in-person.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
                
            </ListItem>
            <ListItem>3. Upon request, your County Recorder's office will send a special elections board to deliver your ballot.</ListItem>
            <ListItem>4. Vote!</ListItem>
            <ListItem>5. The special elections board will return your ballot by <b>8pm Tuesday, November 8th</b>.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Florida;