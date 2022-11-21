import * as React from 'react';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Container from '@mui/material/Container';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
export default function IconAvatars() {
  return (
    <Container className=' d-flex  justify-content-center' style={{height:'auto',width:'auto'}}>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 4, sm: 6, md:20 }}>

      <div  className='text-center'>
      <Avatar sx={{ bgcolor: '#81d4fa', width: 100, height: 100 }}>
       
       
        <LocalShippingSharpIcon sx={{ fontSize: 50 }}/>

      </Avatar>
      {/* <div style={{  }} >
      <h6 className=' mt-3 mb-2 ' >FREE SHIPPING</h6>
      <p className=' fw-lighter '>ON ORDER</p>
      
      </div> */}

    </div>



      <div>
      <Avatar sx={{ bgcolor:'#b39ddb', width: 100, height: 100 }}>
        
        <AddShoppingCartSharpIcon sx={{ fontSize: 50 }}/>
      </Avatar>
   
      {/* <div style={{  }}>
      <h6 className=' mt-3 mb-2 '>ALWAYS FRESH</h6>
      <p className=' fw-lighter '>ON ORDER</p>
      
      </div> */}
      </div>

      <div>
      <Avatar sx={{ bgcolor: '#f48fb1',width: 100, height: 100 }}>
        <AutoAwesomeSharpIcon sx={{ fontSize: 50 }}/>
      </Avatar>
      {/* <div style={{  }}>
      <h6 className=' mt-3 mb-2 '>FSUPERIOR QUALITY</h6>
      <p className=' fw-lighter '>ON ORDER</p>
      
      </div> */}
      </div>

      <div>
      <Avatar sx={{ bgcolor:'#b0bec5',width: 100, height: 100 }}>
        <HomeSharpIcon sx={{ fontSize: 50 }}/>
      </Avatar>
      {/* <div style={{  }}>
      <h6 className=' mt-3 mb-2 '>SUPPORT</h6>
      <p className=' fw-lighter '>ON ORDER</p>
      
      </div> */}
      </div>

    </Stack>
  
    </Container>
  );
}
