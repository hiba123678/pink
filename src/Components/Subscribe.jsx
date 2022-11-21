import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
function Subscribe() {
  return (
//     <Grid container className=' fluied border border-primary ' style={{height:250,backgroundColor:"#f7f6f2"}}>
// <Container className='d-flex flex-row align-items-center' sx={12} md={6}>
//       <Grid sx={12} md={6} className=''>
//   <h2 style={{fontSize: '22px', fontfamily: "Poppins",fontWeight: 400}}>Subcribe to our Newsletter</h2>
//   </Grid>

//   <Grid sx={12} md={6}>


  // <TextField
  //         required
        
   
  //         defaultValue="Enter Your Email"
  //         style={{width:'400px'}}
  //         className='rounded-0'
  //       />
  //       <Button variant="contained"     className='me-5 border-0 rounded-0'  style={{width:'100px', height:'55px',backgroundColor:'#ab92af'}}>
  //         Large
  //       </Button>
//   </Grid>
//   </Container>
   
//     </Grid>

<>
<Grid style={{backgroundColor:"#f7f6f2"}}>

<Container>
<Grid container className='d-flex  align-items-center' style={{height:200,backgroundColor:"#f7f6f2"}} >

  <Grid xs={12} md={6}>
 
  <h2 style={{fontSize: '22px', fontfamily: "Poppins",fontWeight: 400}}>Subcribe to our Newsletter</h2>
 <p
 style={{    fontFamily: "Poppins",

 fontsize: '15px',
 lineLeight: 1.8,
 fontWeight: 400,
 color: "gray"}}
 
 
 >Get e-mail updates about our latest shops and special offers</p>
  </Grid>
  <Grid xs={12} md={6}  style={{maxwidth:'100%'}}>
  <Stack direction="row">
  <TextField
          required
        
   
          defaultValue="Enter Your Email"
          style={{width:'70%',backgroundColor:"#ffffff"}}
          className='border-0 rounded-0 '
        />
        <Button variant="contained"     className=' border-0 rounded-0'  style={{width:'15%',backgroundColor:'#ab92af'}}>
         Subscribe
        </Button>
        </Stack>
  </Grid>

  </Grid>
  </Container>
  
</Grid>
  </>
  )
}

export default Subscribe;
