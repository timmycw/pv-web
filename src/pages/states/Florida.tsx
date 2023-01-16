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
            If you are <b>hospitalized between October 29th and November 7th</b>, you are eligible to vote by the following steps:
        
        
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
            <ListItem>3. Return ballot application to your county's Supervisor of Elections with sufficient time to return your ballot by <b>November 8th 7PM</b>.
                    Check <a href="dos.myflorida.com/elections/contacts/supervisor-of-elections/">dos.myflorida.com/elections/contacts/supervisor-of-elections/</a> for addresses. You may deliver your ballot application:
            
                    <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent, such as family member. A voter can designate an immediate family member (the designee's spouse or the parent, child,
                                grandparent, or sibling of the designee or of the designee's spouse) or the voter's legal guardian to request the ballot on their behalf.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                Some counties may allow you to submit your application via a call to your Supervisor of Elections, rather than sending an authorized agent in-person.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
            </ListItem>
            <ListItem>4. Receive ballot. You may obtain your ballot through your agent or, in some counties, through an 
                in-person team sent by your county's Supervisor of Elections. 
            </ListItem>
            <ListItem>5. Vote!

            </ListItem>
            <ListItem>6. Return completed ballot to Board of Canvassers by <b>November 8th 7PM</b> by your authorized agent
            or by mail. Check <a href="dos.myflorida.com/elections/contacts/supervisor-of-elections/">dos.myflorida.com/elections/contacts/supervisor-of-elections/</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Florida;