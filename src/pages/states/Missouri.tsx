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


const deadlines = ["tuesday", "OCT 20", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals",
"tuesday 8PM", "NOV 3", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your local election authority. Check addresses at https://www.sos.mo.gov/elections/govotemissouri/localelectionauthority",
"tuesday 8PM", "NOV 3", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your local election authority"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Missouri() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>MISSOURI</Typography>
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
            If you are <b>hospitalized between October 20th and November 3rd</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete your absentee ballot application:
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               If you are hospitalized after the normal absentee deadline of October 20th, you may still obtain an absentee ballot by contacting your local election authority directly and explaining that you have been hospitalized
                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                
                
            </ListItem>
            <ListItem>3. Return ballot application to your local election authority with enough time to return your ballot 
                by <b>November 3rd 8PM</b>. Check <a href="https://www.sos.mo.gov/elections/govotemissouri/localelectionauthority">sos.mo.gov/elections/govotemissouri/localelectionauthority</a> for addresses. You may deliver your ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent. Missouri requires your agent to be a first- or second-degree relative.


                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                You may submit your application by directly contacting your local election authority.
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
                   
       
                </List>
            </ListItem>
            <ListItem>4. Receive your ballot through your agent, by mail, or (if you are hospitalized in your county of residence or a neighboring county) an in-person ballot delivery team sent by your local election authority.

            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to your local election authority by <b>November 3rd 8PM</b> by your authorized agent 
            or mail. Check <a href="https://www.sos.mo.gov/elections/govotemissouri/localelectionauthority">sos.mo.gov/elections/govotemissouri/localelectionauthority</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Missouri;