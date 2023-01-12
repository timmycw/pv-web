import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";


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
          <Typography variant="h6">Contact patientvoting@gmail.com for more info</Typography>
          <br/>
          <br/>
          <Typography variant="h6">Follow us at</Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2022. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
        
    </div>
  );
}

export default Footer;