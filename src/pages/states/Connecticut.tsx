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


const deadlines = ["wednesday", "NOV 2", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals.",
"tuesday 8PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", 
"Completed application must be returned to your local Town Clerk. Check addresses at tinyurl.com/544ek23d.",
"tuesday 7PM", "NOV 8",
"EMERGENCY BALLOT DEADLINE",
"Voted ballot must be returned to your local Town Clerk."];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Connecticut() {
  return (
    <div className="Body">
        <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>CONNECTICUT</Typography>
                    <Typography variant="h6" sx={{color: '#f56c49'}}>PATIENT VOTING PROCESS</Typography>
                </Box>
            </Box>
            <Box>
                <img src={logo} width="80%"/>
            </Box>
        </Box>
        <br/><br/>
        {/*<Box sx={{display: "flex", justifyContent: "left"}}>
            <Box sx={{display: "flex", width: "50%", height: "50%", justifyContent: "center", backgroundColor: "#ffbb99", transform: "rotate(270deg) translateX(-200px)"}}>
                <Typography variant="h4" sx={{color: "white"}}>DEADLINES OF NOTE</Typography>
  </Box>*/}
           
            <Box sx={{width: "100%"}}>
            <br/>
                <Deadlines {...deadlines}></Deadlines>
            <br/>
            </Box>
        {/*</Box>*/}
        
        <br/><br/>
        <Typography fontSize="18px" >
            If you are hospitalized between <b>November 2nd and November 8th</b>, you are eligible to vote by following these steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete emergency ballot application.
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                The application is available to print in both English and Spanish: <a href="tinyurl.com/2s3f4cv4">tinyurl.com/2s3f4cv4</a>.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                Applications are also available in most Town Clerk offices.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
                
            </ListItem>
            <ListItem>3. Return ballot application to Board of Canvassers by <b>November 8th 8PM</b>. Check 
            <a href="tinyurl.com/544ek23d"> tinyurl.com/544ek23d</a> for addresses. You may 
            deliver your ballot application:
                
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
                            <ListItem>By mail. Depending on when you're hospitalized, if you submit your ballot application by mail, it may
                                not arrive in time to the BOE by the required deadline.
                            </ListItem>
                        </Box>
                    </ListItem>

                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>There is no electronic submission of applications allowed in Connecticut.
                            </ListItem>
                        </Box>
                    </ListItem>
                    
                </List>
            </ListItem>
            <ListItem>4. Receive your ballot:
                <List>

                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>By authorized agent, such as famliy member.
                            </ListItem>
                        </Box>
                    </ListItem>

                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>By in-person team from the registrar of voters.
                            </ListItem>
                        </Box>
                    </ListItem>

                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>By mail. Depending on when you're hospitalized, if you request your ballot by mail, it may not arrive in time.
                            </ListItem>
                        </Box>
                    </ListItem>
                    
                </List>
            </ListItem> 
            <ListItem>5. Vote!</ListItem> 
            <ListItem>6. Return completed ballot to Board of Canvassers by <b>November 8th 8PM</b> by authorized agent or
            in-person team from the registrar of voters. Check <a href="tinyurl.com/544ek23d">tinyurl.com/544ek23d</a> for addresses.
                
            </ListItem>
            
        </List>
        </Typography>
    </div>
  );
}

export default Connecticut;