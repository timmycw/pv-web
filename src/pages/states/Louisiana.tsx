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

const deadlines = ["friday", "NOV 4", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals",
"monday 4:30PM", "NOV 7", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your registrar of voters. Check addresses at https://voterportal.sos.la.gov/registrar",
"tuesday 8PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to you registrar of voters"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Louisiana() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>LOUISIANA</Typography>
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
            If you are <b>hospitalized between November 4th and November 8th</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete emergency ballot application:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               You must fill out a <b>General Application for Absentee By Mail Ballot</b> and indicate "Hospitalized" as the reason in Section 2.
                            </ListItem>
                        </Box>
                    </ListItem> 
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                               You must include <b>proof of hospitalization</b> with your application
                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                        
            </ListItem>
            <ListItem>3. Return ballot application to your registrar of voters by <b>November 8th 8PM</b>. 
                Check <a href="https://voterportal.sos.la.gov/registrar">voterportal.sos.la.gov/registrar</a> for addresses. You may deliver your ballot application:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent, such as a family member (but Louisiana does not mandate your agent to be a family member). However, any individual agent is only allowed to handle a maximum of 1 ballot application per election.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By electronic means. You may apply online through the Louisiana Voter Portal.
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
            <ListItem>4. Receive ballot. You may obtain your ballot via your authorized agent, mail, or through electronic means (depending on your parish) .
            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to your registrar of voters by <b>November 8th 8PM</b> by authorized agent or mail. 
                Check <a href="https://voterportal.sos.la.gov/registrar">voterportal.sos.la.gov/registrar</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Louisiana;