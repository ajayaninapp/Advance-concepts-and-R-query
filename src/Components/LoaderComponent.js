import React from 'react'
import { CircularProgress } from '@mui/material'
import {Card,Box} from '@mui/material'
const LoaderComponent = () => {
  return (
    <>
    <Card sx={{height:"90vh",width:"100%"}}>
        <Box sx={{alignItems:"center",textAlign:"center" ,paddingTop:"10%"}}>
        <CircularProgress/>
        </Box>
        
    </Card>
    </>
  )
}

export default LoaderComponent