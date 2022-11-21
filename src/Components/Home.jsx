import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import homeimg from '../assest/homeimg.jpg';
import home from '../assest/home.jpg';
import './style/style.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import home4 from '../assest/home4.jpg';
const styles = {
  paperContainer: {
      backgroundImage: `url(${home})`,
      height:'90vh' ,
      backgroundSize: '100% 100%',
      resize: 'both',
      backgroundRepeat:' no-repeat',
     width:'100%' 

  }
};
function Home() {
  return (
    <>
 
        <Box  className='d-flex  align-items-center  justify-content-center'  style={styles.paperContainer} >
      
        <p className='fst-italic text-center text-white fs-2' >
          
          Dior is your best choice for distinctive bags
          </p>
    </Box>








    </>
  )
}

export default Home;
// #274291