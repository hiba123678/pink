import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
function Social() {
  return (
 <Container className=' ' style={{height:'15vh'}}>
     <Stack direction="row" spacing={2} className='mt-5'>
       < FacebookIcon  fontSize="large"/>
       < TwitterIcon  fontSize="large"/>
       <InstagramIcon  fontSize="large"/>
      </Stack>
 </Container>
  )
}

export default Social;
