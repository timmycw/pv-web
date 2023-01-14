import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
export default function Deadlines(deadlines : string[]) {
  return (  
  <div>
        <Paper
        
      sx={{
        boxShadow: "none",
        p: 2,
        margin: 'auto',
        width: "90%",
        flexGrow: 1,
        borderColor: "black",
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
     <Grid container direction="column" spacing={2} sx={{margin: "5px"}}>
      <Divider sx={{backgroundColor: "black", borderBottomWidth: 4, margin: "1% 2% 1% 0%"}}/>
      <Grid container direction="row" spacing={2} sx={{alignItems:"center"}}> 
        
            <Grid item xs>
                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                    {deadlines[0]}
                </Typography>
                
                <Typography variant="h4" sx={{fontWeight: "bold"}}>
                    {deadlines[1]}
                </Typography>
            </Grid>
        
        
            <Grid item xs>
                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                    {deadlines[2]}
                </Typography>
                <br/>
                <Typography variant="body1" sx={{fontWeight: "medium"}}>
                    {deadlines[3]}
                </Typography>
            </Grid> 
     </Grid>

     <Divider sx={{backgroundColor: "black", borderBottomWidth: 4, margin: "1% 2% 1% 0%"}}/>
     
     <Grid container direction="row" spacing={2} sx={{alignItems:"center"}}> 
            <Grid item xs>
                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                    {deadlines[4]}
                </Typography>
                
                <Typography variant="h4" sx={{fontWeight: "bold"}}>
                    {deadlines[5]}
                </Typography>
            </Grid>
      
            <Grid item xs>
                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                    {deadlines[6]}
                </Typography>
                <br/>
                <Typography variant="body1" sx={{fontWeight: "medium"}}>
                    {deadlines[7]}
                </Typography>
            </Grid>
     </Grid>

     <Divider sx={{backgroundColor: "black", borderBottomWidth: 4, margin: "1% 2% 1% 0%"}}/>

     <Grid container direction="row" spacing={2} sx={{alignItems:"center"}}> 
            <Grid item xs>
                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                    {deadlines[8]}
                </Typography>
                
                <Typography variant="h4" sx={{fontWeight: "bold"}}>
                    {deadlines[9]}
                </Typography>
            </Grid>
      
            <Grid item xs>
                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                    {deadlines[10]}
                </Typography>
                <br/>
                <Typography variant="body1" sx={{fontWeight: "medium"}}>
                    {deadlines[11]}
                </Typography>
            </Grid>
     </Grid>

    </Grid>
        
    </Paper>
        
        
  </div>);
}