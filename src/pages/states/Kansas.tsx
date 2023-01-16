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


const deadlines = ["tuesday 7PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to Board of Canvassers office. Check addresses at https://www.sos.ks.gov/elections/county_election_officers.aspx",
"tuesday 7PM", "NOV 8", 
"EMERGENCY APPLICATION DEADLINE", "Voted ballot must be returned to your County Election Office"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Kansas() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>KANSAS</Typography>
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
            If you are <b>hospitalized by or before Election Day on November 8th</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete emergency ballot application:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                               You will have to contact your County Election Office to obtain an application.

                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                
                
            </ListItem>
            <ListItem>3. Return ballot application to your County Election Office with enough time to obtain and return your ballot 
                by <b>November 8th 7PM</b>. Check <a href="https://www.sos.ks.gov/elections/county_election_officers.aspx">sos.ks.gov/elections/county_election_officers.aspx</a> for addresses. You may deliver your ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By electronic means, such as emailing your County Election Office.
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
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>
                                You are not allowed to submit your application in-person through a designated agent allowed in Kansas.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
       
                </List>
            </ListItem>
            <ListItem>4. Receive ballot. Your ballot will be mailed to you as soon as your application has been processed.
            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to your County Election Office by <b>November 8th 7PM</b> by authorized agent. Check <a href="https://www.sos.ks.gov/elections/county_election_officers.aspx">sos.ks.gov/elections/county_election_officers.aspx</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Kansas;