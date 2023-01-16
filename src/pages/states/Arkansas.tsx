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
import { Report } from "@mui/icons-material";


const deadlines = ["tuesday", "NOV 1", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals. Before this day, you may apply for a normal absentee ballot with an application via mail or electronically",
"tuesday 1:30PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your County Clerk.", 
"tuesday 7:30PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your County Clerk"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Arkansas() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>ARKANSAS</Typography>
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
            <ListItem>2. Complete ballot application.
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                Fill out an absentee ballot application..
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                You must additionally file with the County Clerk an affidavit from the administrative head of a hospital or nursing home
                                verifying that you are currently hospitalized.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
                
            </ListItem>
            <ListItem>3. Return ballot application to Board of Canvassers by November 8th 1:30PM. 
                Check <a href="https://www.sos.arkansas.gov/uploads/elections/ARCountyClerks.pdf">sos.arkansas.gov/uploads/elections/ARCountyClerks.pdf</a> for addresses. You may deliver your ballot application:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent, such as a family member.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>By mail. This is only possible <b>before</b> November 1st. Depending on when you're hospitalized, if you
                            submit your ballot application by mail, it may not arrive in time to the BOE by the required deadline.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>By electronic means. This is only possible <b>after</b> November 1st. 
                            </ListItem>
                        </Box>
                    </ListItem>
                </List>
            </ListItem>
            <ListItem>4. Receive ballot.</ListItem> 
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to your county clerk by <b>November 8th 7:30PM</b> by your authorized agent.
               
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Arkansas;