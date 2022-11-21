import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import per1 from '../assest/per1.jpeg';
import per2 from '../assest/per2.jpg';
import per3 from '../assest/per3.jpeg';
export default function One() {
  return (
    <Card sx={{ maxWidth: 350 }} className='' >
      <CardActionArea className='d-flex align-items-start flex-column '>
        <img
          component="img"
         style={{ height:"100px",
         width:"100px"}}
         src={per1}
          alt="green iguana"
          className=' rounded-circle align-self-center '
        />
        <CardContent>
         
          <Typography gutterBottom variant="body2" color="text.secondary" className='mt-4'
          
          style={{fontSize: '18px',
          fontWeight: 500,
        
          fontFamily: "Poppins"}}
          
          
          
          
          
          >
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </Typography>
          <Typography gutterBottom component="div" className='text-center mt-4' style={{    fontWeight: 400,
    fontSize: '18px',
    
    color:"#000"}}>
          Garreth Smith
          </Typography>
          <Typography  component="div" className='text-center ' 
          
          style={{    fontSize: '12px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '2px'}}
          
          
          
          
          >
          Marketing Manager
          </Typography>
 
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
