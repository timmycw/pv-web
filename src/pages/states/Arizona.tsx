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


const deadlines = ["friday", "OCT 24", 
"EMERGENCY APPLICATION START", "Patients may start requesting a special elections board to deliver their ballot",
"monday 5PM", "NOV 7", 
"EMERGENCY APPLICATION DEADLINE", "Deadline to inform your county recorder's office of your hospitalization and request ballot delivery", 
"tuesday 8PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "An in-person team will return your ballot by this deadline"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Arizona() {
  return (
    <div className="Body">
        <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>ARIZONA</Typography>
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
            If you are hospitalized between <b>October 28th and November 7th</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Inform your county recorder's office of your hospitalization.
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You can write down a written request for an absentee ballot and sign it, attesting to your hospitalization.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You can also file a verbal request by calling your local County Recorder's Office.
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

export default Arizona;