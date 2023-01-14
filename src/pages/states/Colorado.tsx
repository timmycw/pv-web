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


const deadlines = ["universal mail-in", "N/A", 
"EMERGENCY APPLICATION START", 
"Colorado is a universal mail-in state and you can check your ballot at https://www.govotecolorado.gov/. If you became hospitalized after your ballot has been sent, you may obtain a replacement through the 'emergency process'.",
"tuesday 5PM", "NOV 8", 
"EMERGENCY REPLACEMENT DEADLINE AND BALLOT DEADLINE", 
"Completed application must be returned to your County Election office.",
"tuesday 7PM", "NOV 8",
"EMERGENCY BALLOT DEADLINE",
"Voted ballot must be returned to your County Election Office. If you are eligible for electronic voting, your ballot must also be selected by this time."];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Colorado() {
  return (
    <div className="Body">
        <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>COLORADO</Typography>
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
            If you are hospitalized <b>and need a replacement mail-in ballot</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Fill out a written request for your County Election Office.
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                Your written request must include your signature, name, and address of residence and indicate that you are unable to vote in person after the last day to mail a ballot.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                The written request must also request that the replacement ballot be given to the authorized person as identified by name and address of residence.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
                
            </ListItem>
            <ListItem>3. Return ballot application to County Election Office by <b>November 8th 5PM</b>. Check 
            <a href="https://www.sos.state.co.us/pubs/elections/Resources/CountyElectionOffices.html"> sos.state.co.us/pubs/elections/Resources/CountyElectionOffices.html</a> for addresses. You may 
            deliver your ballot application:
                
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent, such as a family member. However, a non-family member may also serve as your authorized agent.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>By electronic means, such as email.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>By mail. Depending on when you're hospitalized, if you submit your ballot application by mail, it may
                                not arrive in time to the BOE by the required deadline.
                            </ListItem>
                        </Box>
                    </ListItem>
                    
                </List>
            </ListItem>
            <ListItem>4. Receive ballot.
                <List>

                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>By authorized agent.
                            </ListItem>
                        </Box>
                    </ListItem>

                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>If you do not have an agent, you can receive your ballot electronically. Follow portal
                                instructions at <a href="https://myballot.sos.colorado.gov/app/home">myballot.sos.colorado.gov/app/home</a>.
                            </ListItem>
                        </Box>
                    </ListItem>
                    
                </List>
            </ListItem> 
            <ListItem>5. Vote!</ListItem> 
            <ListItem>6. Return completed ballot to Board of Canvassers by <b>November 8th 7PM</b> by authorized agent or
            by electronic portal if approved. Check <a href="https://www.sos.state.co.us/pubs/elections/Resources/CountyElectionOffices.html">sos.state.co.us/pubs/elections/Resources/CountyElectionOffices.html</a> for addresses.
                
            </ListItem>
            
        </List>
        </Typography>
    </div>
  );
}

export default Colorado;