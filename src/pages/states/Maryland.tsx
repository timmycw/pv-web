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


const deadlines = ["friday", "OCT 30", 
"EMERGENCY APPLICATION START", "Patients may start voting in hospitals",
"tuesday 8PM", "NOV 3", 
"EMERGENCY APPLICATION DEADLINE", "Completed application must be returned to your county Board of Elections. Check addresses at https://elections.maryland.gov/about/county_boards.html",
"tuesday 8PM", "NOV 3", 
"EMERGENCY BALLOT DEADLINE", "Voted ballot must be returned to your county Board of Elections"];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Maryland() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>MARYLAND</Typography>
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
            If you are <b>hospitalized between October 30th and November 3rd</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete absentee ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                               Fill out the <b>Maryland Application for an Absentee Ballot</b>, where you may also choose how you would like to received your ballot in question #6.
                            </ListItem>
                        </Box>
                    </ListItem> 
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                               In order to submit your application via an agent, you and your agent must also fill out the <b>Designation of Agent Form</b>.
                            </ListItem>
                        </Box>
                    </ListItem> 
                </List>
                
                
            </ListItem>
            <ListItem>3. Return ballot application to your county Board of Elections with enough time to return your ballot by <b>November 3rd 8PM</b>. 
                Check <a href="https://elections.maryland.gov/about/county_boards.html">elections.maryland.gov/about/county_boards.html</a> for addresses. You may deliver your ballot application:

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized agent, such as a family member. However, Maryland allows anybody to serve as your authorized agent.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>
                                There is no submission of applications by mail allowed in Maryland.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>
                               There is no electronic submission of applications allowed in Maryland.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
       
                </List>
            </ListItem>
            <ListItem>4. Receive ballot through your authorized agent or, on a case-by-case basis, electronically by email.
            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. Return completed ballot to your county Board of Elections by <b>November 3rd 8PM</b> by authorized agent or mail. 
            Check <a href="https://elections.maryland.gov/about/county_boards.html">elections.maryland.gov/about/county_boards.html</a> for addresses.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Maryland;