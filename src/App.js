import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExerciseDetail from './pages/ExerciseDetail'
import Homepage from './pages/Homepage'


const App = () => {
  return (
    <Box width="400px" sx={{width: {x1: '1488px'}}} m="auto">
    <Navbar />

    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />

    </Box>
  )
}

export default App