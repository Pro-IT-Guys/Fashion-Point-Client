import { CircularProgress } from '@mui/material'
import React from 'react'
import MainLayout from 'src/layouts/main'

function Loader() {
  return (
    <MainLayout>
      <div className="flex justify-center items-center h-[100vh]">
        <CircularProgress />
      </div>
    </MainLayout>
  )
}

export default Loader
