import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
function HeaderProduct() {
  return (
  <Container className=' pt-4 ' sx={{height:'auto'}}>
     <Grid item xs={12} md={4} className="d-flex justify-content-center">
     
     <Typography variant="h5" gutterBottom  sx={{fontFamily: "Lora",color:"#ab92af"}} className="fst-italic text-center">
     Featured Products
</Typography>     </Grid>

<Grid item xs={12} md={4} className="d-flex justify-content-center">
<Typography variant="h4"  sx={{}} className="fw-bold">
Our Products
</Typography>
</Grid>
 
<Grid item xs={12} md={4} className="d-flex justify-content-center">
<Typography variant="body1" gutterBottom  sx={{fontFamily: "Poppins", lineHeight: 1.8,fontWeight: 400,color: "gray"}} className="">
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
</Typography>

</Grid>

</Container>
  )
}

export default HeaderProduct;
