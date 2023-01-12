import React from "react";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DangerousIcon from '@mui/icons-material/Dangerous';

import {styled} from '@mui/material/styles';

import Deadlines from '../../components/Deadlines';


const deadlines = ["friday 5PM", "NOV 3", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals",
"tuesday 12PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", "Completed Emergency Ballot Application must be returned to your county's Absentee Election Manager", 
"tuesday 12PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your county's Absentee Election Manager"];

const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Alabama() {
  return (
    <div className="Body">
        <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>ALABAMA</Typography>
        <Typography variant="h6" align="center" sx={{fontStyle: "italic"}}>How to vote from your hospital bed</Typography>
        <br/>
        <Typography variant="h5" align="center" sx={{fontWeight: "bold"}}>LINKS</Typography>
        <br/>
        <Typography variant="h5" align="center" sx={{fontWeight: "bold"}}>DEADLINES</Typography>
        <br/>
            <Deadlines {...deadlines}></Deadlines>
        <br/>
        <Typography variant="h5" align="center"sx={{fontWeight: "bold"}}>STEPS TO VOTE</Typography>
        <br/>
        <Typography fontSize="18px" >
            If you are hospitalized between November 3rd and November 8th, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete Emergency Absentee Ballot Application which can be found on Absentee
                Election Manager website (HERE). Make sure to:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                Check the box that explains your qualification for a ballot (medical emergency, caregiver of
                                hospitalized family member, recent death of family member) 
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                Complete the Physician's Report and have it signed by a physician if you are applying due to 
                                medical emergency.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                If you are a caregiver, you must hand-deliver your application to the Absentee Election Manager.
                            </ListItem>
                        </Box>
                    </ListItem>
                </List>
                
            </ListItem>
            <ListItem>3. Return ballot application to your county's Absentee Election Manager by <b>November 8th 12 PM</b>. Check 
                HERE for addresses. You may deliver your ballot application:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By designated agent. This agent must be designated by you on your absentee ballot.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>By mail. Depending on when you're hospitalized, if you submit your ballot application by mail,
                                it may not arrive in time to the BOE by the required deadline.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>
                                There is no electronic submission of application/ballots in Alabama.
                            </ListItem>
                        </Box>
                    </ListItem>
                </List>
            </ListItem>
            <ListItem>4. Receive ballot.</ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to your county's Absentee Election Manager by <b>November 8th 12 PM</b> by authorized agent.
                Check HERE for addresses. 
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Alabama;