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


const deadlines = ["monday", "OCT 24", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals",
"tuesday 8PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", "Completed Emergency Ballot Application must be returned to any absentee voting location", 
"tuesday 8PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to any absentee voting location"];

const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Alaska() {
  return (
    <div className="Body">
        <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>ALASKA</Typography>
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
            If you are <b>hospitalized between October 19th and November 3rd</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Send an authorized agent to any absentee voting location in Alaska:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                There are no restrictions on whether or not your authorized agent has to be a family member.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                There is no deadline to initially apply for a special needs voting ballot but you should do so with
                                enough time to return your ballot by Nov 3rd 8PM.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
                
            </ListItem>
            <ListItem>3. Your agent will receive a special needs envelope, a ballot, and a secrecy sleeve to deliver to you to vote.
                Check <a href="https://www.elections.alaska.gov/CORE/AIPEVEvents.php">elections.alaska.gov/CORE/AIPEVEvents.php</a> for addresses. You may handle this process:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>There is no submission of the application by mail in Alaska.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>
                                There is no electronic submission of the application in Alaska.
                            </ListItem>
                        </Box>
                    </ListItem>
                </List>
            </ListItem>
            <ListItem>4. Receive ballot through your authorized agent.</ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to any absentee voting location within Alaska by <b>November 3rd 8 PM</b> by authorized agent.
                Check <a href="https://www.elections.alaska.gov/CORE/AIPEVEvents.php">elections.alaska.gov/CORE/AIPEVEvents.php</a> for addresses. 
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Alaska;