import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <div>
    <Paper sx={{marginTop: 'calc(10% + 60px)', bottom: 0}} component="footer" square variant="outlined">
      <Container maxWidth="lg" sx={{display: "flex"}}>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
          <Typography variant="body1">Contact <a href="mailto:patientvoting@gmail.com">patientvoting@gmail.com</a> for more info</Typography>
          <br/>
          <br/>
          <br/>
          
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <Typography variant="body1" color="initial">
            Follow us at: 
          </Typography>
          &nbsp;
          <a href="https://www.facebook.com/patientvoting"><FacebookIcon/></a>
          &nbsp;
          <a href="https://twitter.com/patientvoting"><TwitterIcon/></a>
          

        </Box>
      </Container>
    </Paper>
        
    </div>
  );
}

export default Footer;