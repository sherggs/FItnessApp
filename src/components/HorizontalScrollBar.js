import { Box } from '@mui/material'
import React from 'react'

const HorizontalScrollBar = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Box 
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        
        >


      </Box>
      )
      )}
    </div>
  )
}

export default HorizontalScrollBar 