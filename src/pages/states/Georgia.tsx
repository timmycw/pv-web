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


const deadlines = ["5 days before", "Election Day", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals.",
"", "Election Day", 
"EMERGENCY APPLICATION DEADLINE", "Contact your county election office if you are hospitalized after the normal absentee application deadline.", 
"Election Day", "8PM", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to the county election office."];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Georgia() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>GEORGIA</Typography>
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
            If you are <b>hospitalized up to 5 days before the election</b>, you are eligible to vote by following these steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete an absentee ballot application. Put your hospital address as the temporary mailing address (Section 5).
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                To obtain an absentee ballot application when you are hospitalized after the normal absentee ballot application, you 
                                can contact your county election office at <a href="sos.ga.gov/county-elections-offices">sos.ga.gov/county-elections-offices </a>
                                to request an absentee ballot. You can also have a family member contact on your behalf.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
                
            </ListItem>
            <ListItem>3. Receive ballot. You may receive your ballot through your authorized agent or through delivery by a registry or deputy registrar (in some counties).
            
                    
            </ListItem>
            <ListItem>4. Vote!
            </ListItem>
            <ListItem>5. The ballot must be sealed properly and returned to the deliverer. If you registered to vote for the first 
                time in Georgia by mail and have not previously provided proper identification, then you will be asked to provide 
                proper identification. If you don't have it, you will be allowed to vote by provisional ballot. Once the 
                identification and registration of the voter have been verified, the vote will be officially recorded. 

            </ListItem>
            
        </List>
        </Typography>
    </div>
  );
}

export default Georgia;