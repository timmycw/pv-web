import React, { Component } from "react";
import Box from "@mui/material/Box";
import { borders } from '@mui/system';
import Typography from "@mui/material/Typography";

import Carousel from 'react-material-ui-carousel';

import carousel1 from '../images/carousel1.png';
import carousel2 from '../images/carousel2.png';
import carousel3 from '../images/carousel3.png';

export default class Testimonials extends Component {
  render() {
    return (
      
      <Box sx={{border: "1"}}>
        
        <Carousel>
            <div className="carousel-item">
            <img src={carousel2} width="100%"/>
                <div className="carousel-item-text">
                <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}> WHY WE DO WHAT WE DO</Typography>
                <br></br>
                <br></br>
                <br></br>
                <blockquote>
                <i> "Doctors today don’t necessarily have to be stacking gurneys in the streets, but we do have to recognize that the health of the community is part of our medical mission. Civic engagement is integral to that. When our patients ask what they can do to improve their health, in addition to sunscreen, exercise and five servings of fruits and vegetables, we should advise voting.
                    <br></br>
                    This is one prescription that doesn’t require prior authorization from the insurance company."
                
                    <br></br>
                    <br></br>
                    - Dr. Ofri, New York Times</i>
                    <br></br>
                    </blockquote>
                </div>
                

            </div>
            
            
            <div className="carousel-item">
            <img src={carousel3} width="100%"/>
                <div className="carousel-item-text">
                    <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}> WHY WE DO WHAT WE DO</Typography>
                    <br></br>
                    <br></br> 
                    <br></br>
                    <blockquote>
                        <i>"Patients never want to hear they have to be admitted to the hospital. That feeling is worsened when they realize they won't make it to the polls.
                        <br></br>
                        During the 2016 election, I had multiple patients express their disappointment that they would not be able to vote if they were hospitalized. I didn't know then what I know now: hospitalized patients have the right and ability to vote."
                    
                    <br></br>
                    <br></br>
                    - Dr. Kelly Wong, Founder of Patient Voting</i>
                    <br></br>
                    </blockquote>
                </div>
            </div>
            
            <div className="carousel-item">
            <img src={carousel1} width="100%"/>
                <div className="carousel-item-text">
                    <Typography variant="h4" align="center" sx={{fontWeight: "bold"}}> WHY WE DO WHAT WE DO</Typography>
                    <br></br>
                    <br></br>
                    <br></br>
                    <blockquote>
                        <i>"Healers are called to heal. When the fabric of communities upon which health depends is torn, then healers are called to mend it. The moral law within insists so. Improving the social determinants of health will be brought at last to a boil only by the heat of the moral determinants of health."
                    
                    <br></br>
                    <br></br>
                    - The Moral Determinants of Health, by Donald M. Berwick, MD, MPP</i>
                    <br></br>
                    </blockquote>
                </div>
            </div>
        
        </Carousel>
      </Box>
      
    );
  }
}