import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import MenuList from '@mui/material/MenuList'

function AllWeb() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{height:'auto'}} className=" container">
      <Grid container className='mt-5' >
        <Grid xs={12} md={3} className='mt-5'>
            <div>
          <h4>Dior Bags </h4>
          <p> far far away, far from the countries<br/> dior bages is the best choice <br/>for you</p>
          </div>
        </Grid>

        <Grid xs={12} md={3}  className='mt-5'>
        <div>
          <h4>Menu </h4>
          <MenuList>
        <MenuItem>Shop</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Journal</MenuItem>
        <MenuItem>Contact Us</MenuItem>
       </MenuList>
          </div>
        </Grid>



        <Grid xs={12} md={3}  className='mt-5'>
         <div >
          <h4>Help </h4>
          <MenuList className='text-start'>
        <MenuItem >Shipping Information</MenuItem>
        <MenuItem>Returns & Exchange</MenuItem>
        <MenuItem>Terms & Conditions</MenuItem>
        <MenuItem>Privacy Policy
</MenuItem>
       </MenuList>
          </div>
      
      
      
        </Grid>
        <Grid xs={12} md={3}  className='mt-5'>
        <div>
          <h5>Have a Questions? </h5>
         <p>	203 Fake St. Mountain View,<br/> San Francisco,<br/> California, USA</p>
         <p>	+2 392 3929 210</p>
         <p>	info@yourdomain.com</p>
          </div>
        </Grid>
      </Grid>
    </Box>
 
  )
}

export default AllWeb;

