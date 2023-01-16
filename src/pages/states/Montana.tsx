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


const deadlines = ["friday 5PM", "NOV 4", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals",
"tuesday 8PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your county election office. Check addresses at https://sosmt.gov/Portals/142/Elections/Forms/electionadministrators.pdf",
"tuesday 8PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your county election office"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Montana() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>MONTANA</Typography>
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
            If you are <b>hospitalized between November 5th and November 8th</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete ballot application from the website <a href="https://sosmt.gov/elections/absentee/">sosmt.gov/elections/absentee/</a>:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                               Please fill out the opposite <b>"Affidavit of elector (due to illness or health emergency)"</b>" section attesting that you were hospitalized after the Friday before the election 
                            </ListItem>
                        </Box>
                    </ListItem> 
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               You may fill out the <b>"Designate another person to pick up your absentee ballot"</b> if you are sending an authorized agent to deliver your application and pick up your ballot
                            </ListItem>
                        </Box>
                    </ListItem> 

                    
                </List>
                
            </ListItem>
            <ListItem>3. Return ballot application to your county election office with enough time to return your ballot 
                by <b>November 8th 8PM</b>. Check <a href="https://sosmt.gov/Portals/142/Elections/Forms/electionadministrators.pdf">sosmt.gov/Portals/142/Elections/Forms/electionadministrators.pdf</a> for addresses. You may deliver your ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent, such as a family member. However, anyone may serve as your authorized agent in Montana.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You may also submit your absentee ballot application electronically.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               By mail. Depending on when you're hospitalized, if you submit your ballot application by mail, it may not arrive in time to the BOE by the required deadline.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
       
                </List>
            </ListItem>
            <ListItem>4. Receive your ballot through your agent or through an in-person ballot delivery team from your county election office.

            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to your county election office by <b>November 8th 8PM</b> by an authorized agent. 
            Check <a href="https://sosmt.gov/Portals/142/Elections/Forms/electionadministrators.pdf">sosmt.gov/Portals/142/Elections/Forms/electionadministrators.pdf</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Montana;