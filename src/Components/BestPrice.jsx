import React from 'react';
import Box from '@mui/material/Box';
import pt from '../assest/hib.jpg';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
function BestPrice() {

    const styles = {
        paperContainer: {
            backgroundImage: `url(${pt})`,
            height:'60vh' ,
            backgroundSize: '100% 100%',
            resize: 'both',
            backgroundRepeat:' no-repeat',
           width:'100%' 
      
        }
      };





  return (
   
   
   
 
//  <Box container className=' border border-primary fluied d-flex flex-row ' sx={{height:'500px'}} style={styles.paperContainer} >
      
  
      
//       <Grid item xs={12} md={4} className="border border-primary ">
// g
// </Grid>
      
// <Grid item xs={12} md={4} className="border border-primary ">
// h
// </Grid>
      
//         </Box>


<>

<Grid container columns={12} className=' fluied d-flex flex-row justify-content-end bd-highlight  ' sx={{height:'auto'}} style={styles.paperContainer}> 
  

  <Grid sx={12} md={6} style={{maxWidth:"100%"}} className=''>
<p style={{fontFamily: "Lora", fontStyle: "italic",color:"#ffffff",fontSize: 25}} className="mt-5 fw-5">Best Price For You</p>
<h2 style={{fontWeight: '600px', fontFamily: "Poppins"}}>Deal of the day</h2>
<p style={{fontFamily: "Poppins", 
    
    fontSize: 20,
    lineHeight: 2.8,
    fontWeight: 400,
    color: "#e9cd06"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
 
 
 <p style={{fontFamily: "Lora", fontStyle: "italic",color:"#ffffff",fontSize: 25}}>Dior Bags</p>
 <span style={{fontFamily: "Poppins", 
    
    fontSize: 20,

    color: "#e9cd06"}}>$10 
  <span style={{color:"#ffffff"}}> now $5 only</span>
   </span>
  </Grid>


</Grid>
</>
  )
}

export default BestPrice;
