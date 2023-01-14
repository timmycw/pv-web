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


const deadlines = ["monday 12PM", "NOV 7", 
"EMERGENCY APPLICATION DEADLINE", 
"Completed application must be returned to the Department's office in your county. Check addresses at https://elections.delaware.gov/locations.html.",
"tuesday 8PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", 
"Voted ballot must be returned to the Department office of the county."];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Delaware() {
  return (
    <div className="Body">
        <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>DELAWARE</Typography>
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
            If you are hospitalized between <b>October 15th and November 7th</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete ballot application. On the application, you may select:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                Option #4: "I am sick or physically disabled (temporarily or permanently)."
                            </ListItem>
                        </Box>
                    </ListItem>
                           
                </List>
                
            </ListItem>
            <ListItem>3. Return ballot application to the Department's office in your county by <b>November 7th at 12PM</b>. Check 
            <a href="https://elections.delaware.gov/locations.html"> elections.delaware.gov/locations.html</a> for addresses. You may 
            deliver your ballot application:
                
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                Electronically or through an authorized agent.
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
                                not arrive by the required deadline.
                            </ListItem>
                        </Box>
                    </ListItem>
                    
                </List>
            </ListItem>
            <ListItem>4. Receive your ballot through mail, electronically, or authorized agent.
                
            </ListItem> 
            <ListItem>5. Vote!</ListItem> 
            <ListItem>6. Return completed ballot to Board of Canvassers by <b>November 8th 7PM</b> by authorized agent or
            mail. Check <a href="https://elections.delaware.gov/locations.html">elections.delaware.gov/locations.html</a> for addresses.
                
            </ListItem>
            
        </List>
        </Typography>
    </div>
  );
}

export default Delaware;