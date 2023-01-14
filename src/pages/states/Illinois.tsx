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


const deadlines = ["thursday", "OCT 24", 
"HEALTHCARE FACILITY VOTING STARTS", "Patients may start voting in hospitals.",
"tuesday 7PM", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", "The ballot must be delivered back to the election authority before 7:00 p.m. on Election Day by the representative."];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function Illinois() {
  return (
    <div className="Body">
       <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>ILLINOIS</Typography>
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
            <ListItem>2. From PDF: Healthcare Facility Voting from 
                <a href="https://elections.il.gov/electionoperations/VotingByMail.aspx"> elections.il.gov/electionoperations/VotingByMail.aspx</a>.
                <br/> <br/>
                Voter must obtain an <b>Application for Ballot for Qualified Voter Admitted to Hospital, Nursing Home, or 
                Rehabilitation Center.</b> The application can be obtained from the election authority (county clerk or board of 
                election commissioners, depending on where the voter is registered to vote).

                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                Application is not available online; it can only be obtained in person.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                Their physician must complete the Certificate of Attending Physician.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                Find contact information for the election commissioners here: 
                                <a href="https://elections.il.gov/ElectionOperations/ElectionAuthorities.aspx?MID=cQHxtxVEmuo%3d&T=637301780792935033"> elections.il.gov/ElectionOperations/ElectionAuthorities.aspx?MID=cQHxtxVEmuo%3d&T=637301780792935033</a>
                            </ListItem>
                        </Box>
                    </ListItem>
       
                </List>
                
                
            </ListItem>
            <ListItem>3. A legal relative or a registered voter from the voter’s precinct can then hand deliver the application 
                to the election authority’s office. 
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                Transmission by legal relative or a registered voter from the voter's precinct.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>
                                There is no submission of application/ballot by mail or by electronic submission in Illinois.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
       
                </List>
            </ListItem>
            <ListItem>4. The authorized agent (family member or precinct voter) signs an affadavit to pick up the ballot, then delivers the ballot to the patient.

            </ListItem>
            <ListItem>5. Vote!</ListItem>
            <ListItem>6. The authorized agent must return the ballot/envelope to the election authority by 7PM on Election Day November 8th.
            </ListItem>
        </List>
        </Typography>
    </div>
  );
}

export default Illinois;