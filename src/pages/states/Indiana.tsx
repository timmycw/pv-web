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


const deadlines = ["thursday", "OCT 20", 
"ABSENTEE VOTING BY TRAVEL BOARD", "First day to submit a request/application",
"monday 12PM", "NOV 7", 
"EMERGENCY APPLICATION DEADLINE", "Deadline to submit application for absentee voting by travel board",
"tuesday", "NOV 8", 
"EMERGENCY BALLOT DEADLINE","Your voted ballot will be returned automatically by the Traveling Board who delivers your ballot to you"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Indiana() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>INDIANA</Typography>
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
            If you are <b>hospitalized before November 1st</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete an Application for Absentee Ballot by Traveling Board: 
                    <a href="https://www.in.gov/idr/hoosiers-vote/files/Vote-by-Travelling-Board-application.pdf"> in.gov/idr/hoosiers-vote/files/Vote-by-Travelling-Board-application.pdf</a>

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               Indicate the appropriate option for "I qualify to vote by traveling board because"
                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                
                
            </ListItem>
            <ListItem>3. Return ballot application to your County Election Board by Nov 7th 12PM (your application may also 
                be approved on a case-to-case basis after this deadline). Check
                <a href="https://indianavoters.in.gov/CountyContact/Index"> indianavoters.in.gov/CountyContact/Index</a> for addresses. You may deliver your ballot application:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You may submit your application by an authorized agent, such as a family member.

                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You may submit your application through email or fax.

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
                   
       
                </List>
            </ListItem>
            <ListItem>4. Receive ballot. Your ballot will be delivered to you by a Traveling Board, an in-person team sent by your County Election Board to personally deliver your ballot.

            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Your voted ballot will be <b>returned automatically</b> to your County Election Board by the Traveling Board who delivered your ballot to you.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Indiana;