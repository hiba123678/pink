import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import bag1 from '../assest/bag1.jpg';
import bag2 from '../assest/bag2.jpg';
import bag3 from '../assest/bag3.jpg';
import bag5 from '../assest/bag5.jpg';
import bag4 from '../assest/bag4.jpg';
import bag44 from '../assest/bag44.jpeg';
import Container from '@mui/material/Container';


import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { maxHeight } from '@mui/system';

export default function StandardImageList() {
  return (
    <Container className=''>
 
 <Grid container spacing={4}>

 <Grid item xs={12} md={4}>
<img src={bag1} width='100%' height='100%'/>
  </Grid>


  <Grid item xs={12} md={4} className='d-flex flex-column  align-items-center' style={{    fontFamily: "Poppins"}}>
<h3 className="fst-italic pt-4" style={{}}>DIOR SHOOPING</h3>
<p className='fw-lighter lh-lg text-muted fs-5'>Protect the health of every home</p>
<Button variant="contained" size="large" className='rounded-pill' sx={{ backgroundColor:"#ab92af"}}>
         shooping Now
        </Button>
  </Grid>

  <Grid item xs={12} md={4} >
  <img src={bag3} width='100%' height='100%'/>
  </Grid>

  <Grid item xs={12} md={4}>
  <img src={bag5} width='100%' height='100%'/>
  </Grid>

  <Grid item xs={12} md={4}>
  <img src={bag44} width='100%' height='100%'/>
  </Grid>
  <Grid item xs={12} md={4}>
  <img src={bag2} width='100%' height='100%'/>
  </Grid>







  </Grid>


  </Container>
  );
}

