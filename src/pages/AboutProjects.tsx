import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';

function AboutProjects() {
  return (
     <div className="Body">
        <Typography variant="h3" align="center" sx={{fontWeight: "bold"}}>Projects</Typography>
        <br/>
        <br/>
        <div className="projects-grid">
          <Box sx={{width: "35%", marginLeft: "10%", marginRight: "auto", marginBottom: "10%"}}>
            <Typography variant="h6" sx={{fontWeight: "bold"}}>
              Emergency Absentee Voting for Hospitalized Patients and Voting During COVID-19: A 50-State Study
            </Typography>
            <br></br>
            <Typography variant="body1">
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8328173/">
                Western Journal of Emergency Medicine · Jul 15, 2021
                </a>
            </Typography>
            <br></br>
            <Typography variant="body1">
               While 39 states operate emergency absentee voting processes for hospitalized voters, there are 
               considerable areas for improvement and heterogeneity in guidelines for these protocols. 
               For future election cycles, information on emergency voting and broader election reforms due to COVID-19
               may be useful for emergency providers and patients alike to improve the democratic participation of voters 
               experiencing illness.
            </Typography>
            <br></br>
            <img src={project1} width="100%"/>
          </Box>
          <Box sx={{width: "35%", marginRight: "auto", marginBottom: "10%"}}>
            <Typography variant="h6" sx={{fontWeight: "bold"}}>            
              Emergency Mail-in Voting in Rhode Island: Protecting Civic Participation During COVID-19 and Beyond     
            </Typography>
            <br></br>
            <Typography variant="body1">
              <a href="http://rimed.org/rimedicaljournal/2020/10/2020-10-14-perspective-burns.pdf">
              Rhode Island Medical Journal · Oct 1, 2020
              </a>
            </Typography>
            <br></br>
            <Typography variant="body1">
              The COVID-19 pandemic challenges safe and equitable voting in the United States’ 2020 elections, 
              and in response, several states including Rhode Island (RI) have made significant changes to election policy. 
              This commentary highlights  salient updates and serves as a primer as to how interested health care workers 
              may navigate this process alongside patients and lead in the arena of patient voting rights.
            </Typography>
            <br></br>
            <img src={project2} width="100%"/>
          </Box>
          <Box sx={{width: "35%", marginLeft: "10%", marginRight: "auto", marginBottom: "10%"}}>
            <Typography variant="h6" sx={{fontWeight: "bold"}}>            
              SAEM 2021 Conference Presentation
            </Typography>
            <Typography variant="body1">
              <a href="https://twitter.com/kellywongmd/status/1379890526598520833">Conference Presentation</a> 
            </Typography>
            <br></br>
            <Typography variant="body1">
              The COVID-19 pandemic posed a challenge to safeguarding civic participation while protecting public health 
              during the 2020 election. Previous research has shown that voters with illness and disability are consistently 
              underrepresented at the polls. Moreover, the risk of viral transmission for in-person voting created additional 
              barriers in 2020. We aimed to analyze emergency absentee voting processes that allow unexpectedly hospitalized 
              voters to obtain an absentee ballot as well as statewide election changes made due to COVID-19.
            </Typography>
          </Box>
        </div>
     </div>
  );
}

export default AboutProjects;