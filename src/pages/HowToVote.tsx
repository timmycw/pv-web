import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';


function States() {
  return (
    <div className="Body">
        <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>How to Vote</Typography>
        <br/>
        <Typography variant="body1" align="center">If you're just looking for state-specific patient voting information:</Typography>
        <br/>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Button href="/States" size="large" variant="outlined" sx={{width: "50%", border: "2px solid", color: "#3071DD",
              "&:hover": {            
              border: "2px solid"
            }}}> Find your state </Button>
        </Box>
        <br/>
        <Typography variant="body1" align="center">
          Otherwise, click the button which best describes you to learn what you can do to help yourself or others vote!
        </Typography>
        <br/>

        <div className="button-grid">
          <Box sx={{ width: "47%", marginBottom: "1%"}}>
            <Button href="#1" size="large" variant="outlined" 
            sx={{width: "100%", border: "2px solid", color: "#3071DD",
              "&:hover": {           
              border: "2px solid"
            }}}> I'm a hospitalized patient</Button>
          <center><a href="#1"><ArrowDropDownRoundedIcon fontSize="large" sx={{color: "#3071DD"}}/></a></center>
          </Box>
          <Box sx={{width: "47%", marginBottom: "1%"}}>
            <Button href="#2" size="large" variant="outlined" sx={{width: "100%", border: "2px solid", color: "#3071DD",
              "&:hover": {            
              border: "2px solid"
            }}}> I'm a healthcare provider of the patient </Button>
            <center><a href="#2"><ArrowDropDownRoundedIcon fontSize="large" sx={{color: "#3071DD"}}/></a></center>
          </Box>
          <Box sx={{width: "47%", marginBottom: "1%"}}> 
            <Button href="#3" size="large" variant="outlined" sx={{width: "100%", border: "2px solid", color: "#3071DD",
              "&:hover": {          
              border: "2px solid"
            }}}> I'm the parent of a hospitalized child </Button>
            <center><a href="#3"><ArrowDropDownRoundedIcon fontSize="large" sx={{color: "#3071DD"}}/></a></center>
          </Box>
          <Box sx={{width: "47%", marginBottom: "1%"}}>
            <Button href="#4" size="large" variant="outlined" sx={{width: "100%", border: "2px solid", color: "#3071DD",
              "&:hover": {        
              border: "2px solid"
            }}}> I'm a friend/family member of the patient </Button>
            <center><a href="#4"><ArrowDropDownRoundedIcon fontSize="large" sx={{color: "#3071DD"}}/></a></center>
          </Box>
          <Box sx={{width: "47%", marginBottom: "1%"}}>
            <Button href="#5" size="large" variant="outlined" sx={{width: "100%", border: "2px solid", color: "#3071DD",
              "&:hover": {   
              border: "2px solid"
            }}}> I'm a recently discharged patient </Button>
            <center><a href="#5"><ArrowDropDownRoundedIcon fontSize="large" sx={{color: "#3071DD"}}/></a></center>
          </Box>
          <Box sx={{width: "47%", marginBottom: "1%"}}>
            <Button href="#6" size="large" variant="outlined" sx={{width: "100%", border: "2px solid", color: "#3071DD",
              "&:hover": {
              border: "2px solid"
            }}}> I'm worried I may become hospitalized </Button>
            <center><a href="#6"><ArrowDropDownRoundedIcon fontSize="large" sx={{color: "#3071DD"}}/></a></center>
          </Box>

        </div>

        <Box sx={{border: "4px solid", borderColor: "#44556B", borderRadius: '10px', marginBottom: "5%"}} id="1">
          <Box sx={{margin: "2% 5% 2% 5%"}}>
          <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}>I'm a hospitalized patient</Typography>
          <br/>
          <Typography variant="h5" align="center" sx={{fontWeight: "bold"}}>It's easy to vote from your hospital bed, and it's your right.</Typography>
          <Typography variant="body1" align="center">
            Follow the general steps below, outlined on each state-specific page.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            1. Check your voter registration
          </Typography>
          <Typography variant="body1" align="center">
            In most states, you must be registered to vote in order to vote from the hospital.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            2. Request a ballot
          </Typography>
          <Typography variant="body1" align="center">
            This process varies by state-to-state, ranging from: filling out an emergency ballot application, 
            making a request in writing, requesting electronically. Check your state page for the specific process.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            3. Obtain your ballot
          </Typography>
          <Typography variant="body1" align="center">
            In some states, the ballot will be mailed to you. If you're lucky, you may designate someone to pick it up 
            for you at the polling place or election office, or the election office may send someone to the hospital 
            to delivery the ballot. Check your state page for the specific process.
            If you need help obtaining a ballot, engage your family members or friends. Alternatively, request to speak 
            to social work or case management and mention Patient Voting. You can always email us at patientvoting@gmail.com 
            and we can help connect you to someone locally.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            4. Vote!
          </Typography>
          <Typography variant="body1" align="center">
            Fill out the ballot! Some states allow someone to assist you, others state you must do this independently. 
            Some states require a witness to co-sign your ballot.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            5. Return your ballot
          </Typography>
          <Typography variant="body1" align="center">
            Have a designated person or the election official return the ballot to an election office by the deadline.
          </Typography>
          </Box>
        </Box>


        <Box sx={{border: "4px solid", borderColor: "#44556B", borderRadius: '10px', marginBottom: "5%"}} id="2">
          <Box sx={{margin: "2% 5% 2% 5%"}}>
          <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}>I'm a healthcare provider</Typography>
          <br/>
          <Typography variant="h5" align="center" sx={{fontWeight: "bold"}}>As a healthcare provider,</Typography>
          <Typography variant="body1" align="center">
            It's our job to care for the patient. The whole patient. You have the potential to help them vote from their hospital bed, 
            if they're interested. Below are some steps that you can take to help your patient vote.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            Tell your patients they have the right to vote
          </Typography>
          <Typography variant="body1" align="center">
            Most patients don't realize they have the right to vote. Ask them if they're interested in learning more. 
            It's important to respect their refusal, if they want to focus on their health only.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            Review the process in your state
          </Typography>
          <Typography variant="body1" align="center">
            The process to vote from a hospital bed is usually just a few steps.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            Identify the barriers
          </Typography>
          <Typography variant="body1" align="center"> 
            Think about which ones the patient will be able to accomplish on their own, or which steps may require 
            friend/family/staff assistance. For example: Printed materials - most patients won't have the ability to 
            print materials while in the hospital. Offer to print off ballot applications for them and provide pens as needed. 
            Transportation - the patient will be unable to leave the hospital. Is there a friend or family member that will be 
            able to pick up and deliver the ballot to the election office? Is there a staff member who can help fax the 
            application to the election office? Some states have restrictions on who can help with which steps. 
            Review the state-specific information. If you live in a state where the election office sends an employee 
            to help the patient vote, will the employee know how to find the floor or bed where your patient is located? 
            If you're stuck on your floor during your long shift, who else can help in the hospital? We recommend case management, 
            social work, and hospital-based volunteers
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            Create a Patient Voting chapter
          </Typography>
          <Typography variant="body1" align="center">
            Identify a few other healthcare providers who are passionate about patient advocacy and this project. 
            You can set up a Patient Voting chapter and give you the support you need.
          </Typography>
          </Box>
        </Box>

        <Box id="3" sx={{border: "4px solid", borderColor: "#44556B", borderRadius: '10px', marginBottom: "5%"}}>
          <Box sx={{margin: "2% 5% 2% 5%"}}>
          <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}>I'm the parent of a hospitalized child</Typography>
          <Typography variant="h5" align="center" sx={{fontWeight: "bold"}}>If you are the parent of a hospitalized child,</Typography>
          </Box>
        </Box>

        <Box id="4" sx={{border: "4px solid", borderColor: "#44556B", borderRadius: '10px', marginBottom: "5%"}}>
          <Box sx={{margin: "2% 5% 2% 5%"}}>
          <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}>I'm a friend/family member of a patient</Typography>
          <br/>
          <Typography variant="h5" align="center" sx={{fontWeight: "bold"}}>As a family member or friend</Typography>
          <Typography variant="body1" align="center">
            You may be your hospitalized family member's best advocate. If they are interested in voting, you 
            may be the best person to help them. Many family members or friends make several trips home during 
            their hospitalization, which is very helpful for the voting process. Let us help you.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            Tell your family member they have the right to vote
          </Typography>
          <Typography variant="body1" align="center">
            See if they are interested in voting while hospitalized, but respect their decision if they are not interested.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            Review the process in your state
          </Typography>
          <Typography variant="body1" align="center">
            The process to vote from a hospital bed is usually just a few steps.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            Identify the barriers and what you can bring from home
          </Typography>
          <Typography variant="body1" align="center">
            Think about what things you can help provide for the patient from home: Printed materials 
            - most patients won't have the ability to print materials while in the hospital. Print off 
            ballot applications from our online links and bring them in from home. Transportation - the 
            patient will be unable to leave the hospital. Are you able to pick up and deliver the ballot 
            to the election office? Can you fax the application to the election office? Some states have 
            restrictions on who can help with which steps. Review the state-specific information. 
            Request help from hospital staff. If your family member would like additional assistance 
            with casting a ballot, request help from case management or social work, or from your medical team.
          </Typography>
          </Box>
        </Box>

        <Box id="5" sx={{border: "4px solid", borderColor: "#44556B", borderRadius: '10px', marginBottom: "5%"}}>
          <Box sx={{margin: "2% 5% 2% 5%"}}>
          <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}>I'm a recently discharged patient</Typography>
          <br/>
          <Typography variant="h5" align="center" sx={{fontWeight: "bold"}}>As a recently discharged or soon-to-be discharged patient,</Typography>
          <Typography variant="body1" align="center">
            It may still be difficult for you to get physically to the polling place. 
            <b>Many of the state laws that allow for patients to vote from their hospital bed also state that if you cannot 
            physically make it to the polling place, you may still be eligible.</b> This section is for patients who have 
            been discharged home. If you have been discharged to an acute care facility or a long term care facility, 
            scroll down for more information.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            If you have yet to be discharged, ask for help.
          </Typography>
          <Typography variant="body1" align="center">
           Part of the process of being discharged helps evaluate what help or assistance you may need at home. 
           This usually includes arranging for visiting nursing, if needed. Ask for help in learning how to vote 
           in your state. Reach out to patientvoting@gmail.com if there is no representative in your state.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            If already at home, read on your state page
          </Typography>
          <Typography variant="body1" align="center">
            Learn about the process and identify what barriers you may need help with. 
            Ask family and friends to assist you, if you are able. If not, reach out to your 
            county election official or to patientvoting@gmail.com.
          </Typography>
          </Box>
        </Box>

        <Box id="6" sx={{border: "4px solid", borderColor: "#44556B", borderRadius: '10px', marginBottom: "5%"}}>
          <Box sx={{margin: "2% 5% 2% 5%"}}>
          <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}>I'm worried I may become hospitalized</Typography>
          <br/>
          <Typography variant="h5" align="center" sx={{fontWeight: "bold"}}>If you are worried you may become hospitalized,</Typography>
          <Typography variant="body1" align="center">
            The most important thing you can do is make sure that you are registered to vote. 
            There are still many states where you must be registered to vote in order to vote by emergency absentee ballot, 
            even though more states are adopting same-day voter registration.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            Register to Vote
          </Typography>
          <Typography variant="body1" align="center">
           Check your voter registration or register to vote here at <a href="https://www.vote.org/">vote.org</a>. Otherwise, 
           there are links to state-specific voter registration sites on the state pages.
          </Typography>
          <br/>
          <Typography variant="h6" align="center" sx={{fontWeight: "bold"}}>
            Check out our COVID page here.
          </Typography>
          </Box>
        </Box>

    </div>
  );
}

export default States;