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
"EMERGENCY APPLICATION START", "Hawaii is a universal mail-in state where ballots are sent to all registered voters about 18 days prior to an election but you may fill out a One-Time Absentee Ballot application if you need to request a new ballot",
"tuesday", "NOV 1", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your County Elections Division. Check addresses at https://elections.hawaii.gov/resources/county-election-divisions/.", 
"tuesday 7PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your County Elections Division"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Hawaii() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>HAWAII</Typography>
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
            If you are hospitalized <b>before November 1st</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete a One-Time Absentee Application, found on the Office of Elections website 
                (<a href="https://elections.hawaii.gov/voting/absentee-voting/">elections.hawaii.gov/voting/absentee-voting/</a>) :

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You must indicate your present location (ex. place of hospitalization) in the application

                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                Although the deadline for this application is due a week before election day, you may also submit this application if you are hospitalized after this date and may be approved on a case-by-case basis
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
                
            </ListItem>
            <ListItem>3. Return ballot application to Board of Canvassers by <b>November 1st</b>. 
            Check <a href="https://elections.hawaii.gov/resources/county-election-divisions/">elections.hawaii.gov/resources/county-election-divisions/</a>. You may deliver your ballot application:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By mail. Depending on when you're hospitalized, if you submit your ballot application by mail, it may not arrive in time to the BOE by the required deadline.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>
                                You are not allowed to submit your application or obtain your ballot via an agent (ex. family member) in Hawaii.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
            
            </ListItem>
            <ListItem>4. Receive ballot. It will be mailed to you by the Board of Canvassers.
            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to Board of Canvassers by Nov 8th 7PM by an agent (ex. family member) or by mail. 
                Check <a href="https://elections.hawaii.gov/resources/county-election-divisions/">elections.hawaii.gov/resources/county-election-divisions/</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Hawaii;