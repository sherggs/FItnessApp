import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Banner from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'},
    }} position="relative" p="20px">

    <Typography color="#FF2625" fontWeight="600" fontSize="26px">  
    Fitness Club
    </Typography> 

    <Typography fontWeight={700}
    sx={{fontSize: {lg: '44px', xs: '40px'}}}
    mb="23px" mt="30px"
    >
        Sweat, Smile,<br /> Repeat
    </Typography>

    <Typography fontSize="22px" lineHeight="35px" mb={4} href="#exercises" >
        Check out the most effective exercises <br /> for your body
    </Typography>

    <Button variant="contained" color="error" 
    sx={{
      backgroundColor: '#FF2625',
      padding: '10px'
    }}>

    Explore Exercises </Button>

    <Typography
    fontWeight={700}
    color='#FF2625'
    sx={{
      opacity: '0.1',
      display: {lg: 'block', xs: 'none'},
      fontSize: '200px',
    }} >
      Exercises
    </Typography>
        
        <img src={Banner} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner