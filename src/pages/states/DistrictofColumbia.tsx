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


const deadlines = ["monday", "OCT 24", 
"REGULAR ABSENTEE BALLOT REQUEST DEADLINE", 
"Deadline for receipt of absentee ballot requests.",
"tuesday", "NOV 8", 
"EMERGENCY BALLOT DEADLINE", 
"The ballot must be delivered back to the election authority before polls close on Election Day."];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function DistrictofColumbia() {
  return (
    <div className="Body">
        <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>DISTRICT OF COLUMBIA</Typography>
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
            If you are hospitalized between <b>October 15th and November 7th</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. All active registered voters in DC will be mailed a ballot for the 2022 elections.
                <br/>
                Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Fill out this emergency absentee ballot application form: <a href="https://www.dcboe.org/dcboe/media/PDFFiles/emergabs.pdf">dcboe.org/dcboe/media/PDFFiles/emergabs.pdf</a>.
                
                
            </ListItem>
            <ListItem>3. The authorized agent signs an affidavit to pick up the ballot, then delivers the ballot to the patient.
                
            </ListItem>
            <ListItem>4. Vote!
                
            </ListItem> 
            
            <ListItem>5. The authorized agent must return the ballot/envelope to the election authority by 8PM on Election Day.
                
            </ListItem>
            <ListItem>
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                Emergency application is available online. In addition, all registered voters will be mailed a ballot for 
                                the 2022 elections. However, DC voters who expect to be away from their DC residence during the election can request a
                                Mail-In Ballot up to 15 days before the election <a href="https://vr.dcboe.org/213115759199060"> vr.dcboe.org/213115759199060</a>.
                            </ListItem>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                If you are concerned that you may not be able to receive or cast your ballot in time for it to be counted, please contact the D.C. 
                                Board of elections at 202.727.2525. 
                            </ListItem>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CautionIcon/>
                            <ListItem>
                                Submit emergency application, obtain ballot, and return ballot via an agent. Any DC resident is eligible to serve as an agent to hand deliver materials to and from the election authority's office.
                            </ListItem>
                        </Box>
                    </ListItem>
                           
                </List>
            </ListItem>
            
        </List>
        </Typography>
    </div>
  );
}

export default DistrictofColumbia;