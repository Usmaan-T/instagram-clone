import React from 'react'
import { Button } from "@chakra-ui/react"
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import { Route, Routes } from 'react-router-dom'
import PageLayout from './Layouts/PageLayout/PageLayout'

const App = () => {
  return ( 
  <>
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/auth" element={<AuthPage />}/>
      </Routes>
    </PageLayout>
  </>
  )
}

export default App