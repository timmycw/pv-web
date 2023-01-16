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


const deadlines = ["tuesday", "NOV 1", 
"LATE VOTE-BY-MAIL STARTS", "Patients may start voting in hospitals.",
"tuesday", "NOV 8", 
"EMERGENCY ABSENTEE BALLOT APPLICATION DEADLINE AND BALLOT DEADLINE", 
"The deadline for the application and ballot are the same; however, we recommend you return your ballot application earlier than the deadline to allow for turnaround time."];


const CheckIcon = styled(CheckBoxIcon)(({ theme }) => ({
  fill: 'green'
}));
const CautionIcon = styled(ReportProblemIcon)(({ theme }) => ({
  fill: '#F1D036'
}));
const DangerIcon = styled(DangerousIcon)(({ theme }) => ({
  fill: 'red'
}));

function California() {
  return (
    <div className="Body">
        <Box sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#44556B"}}>
            <Box sx={{display: "flex", justifyContent: "left", margin: "2%", width: "50%"}}>
                <Box sx={{margin: "2%"}}>
                    <Typography variant="h3" sx={{color: '#f56c49', fontWeight: "bold"}}>CALIFORNIA</Typography>
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
            If you are <b>hospitalized between November 1st and November 8th</b>, you are eligible to vote by the following steps:
        
        
        <List sx={{ listStyleType: "none", pl: 4, '& .MuiListItem-root': {display: 'list-item'} }}>
            <ListItem>
                1. Check your voter registration at <a href="patientvoting.com/check"> www.patientvoting.com/check</a>.
            </ListItem>
            <ListItem>2. Complete a late vote-by-mail ballot application available <a href="https://www.sos.ca.gov/elections/voter-registration/vote-mail/#late">sos.ca.gov/elections/voter-registration/vote-mail/#late</a> or on our site.
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                Under 'statement and authorization' you must select an authorized representative to obtain your ballot and deliver it to you.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                The late vote-by-mail application is available in English, Spanish, Chinese, Hindi, Japanese, Khmer, Korean, Tagalog, Thai, and Vietnamese.
                            </ListItem>
                        </Box>
                    </ListItem>
                   
                </List>
                
            </ListItem>
            <ListItem>3. Return ballot application to the county election official by your authorized representative. Their addresses
                are attached to the late vote-by-mail application.
                
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                By authorized representative. "This application must be provided in person to the county elections official
                                by the voter or the voter's representative."
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <DangerIcon/>
                            <ListItem>Do not return late vote-by-mail application by mail. There is no electronic submission of applications/ballots in California.
                            </ListItem>
                        </Box>
                    </ListItem>
                    
                </List>
            </ListItem>
            <ListItem>4. Receive ballot and vote.</ListItem> 
            <ListItem>5. Your authorized representative must return completed ballot to county election official by <b>November 8th</b> at 8PM.
                <List>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem>
                                The late vote-by-mail option applies to all healthcare workers and family members of hospitalized patients.
                            </ListItem>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: "flex", alignItems: "center"}}>
                            <CheckIcon/>
                            <ListItem> No notary or physical affidavit is required in California for hospitalized voters.
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

export default California;