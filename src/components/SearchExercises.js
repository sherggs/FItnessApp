import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

// import { SearchOffSharp } from '@mui/icons-material' 

import { exerciseOptions, fetchData } from '../utils/fetchData'


const SearchExercises = () => {

  const [Search, setSearch] = useState('')
   
  const HandleSearch = async () => {
    if(Search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      console.log(exerciseData);
    }  
    

  }



  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px'}}}
      mb='50px'
      
      textAlign='center' >
        Awesome Exercises You
        <br /> Should Know
      </Typography>

      <Box position='relative' mb='72px'>

        <TextField 
        
          sx={{ 
            input: { 
              fontWeight:'700',
              border: 'none', 
              borderRadius: '4px'  
              },
              width: {lg: '800px', xs: '350px'},
              backgroundColor: '#fff',
              borderRadius: '40px',
          }}

          height='76px'
          value={Search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search for exercises'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: {lg: '170px', xs: '80px'},
            height: '56px',
            fontSize:{lg: '20px', xs: '14px'},
            position: 'absolute',
            right: '0',
          
          }}
          onClick={HandleSearch}
        >
          Search
        </Button>

      </Box>

    </Stack>
  )
}

export default SearchExercises