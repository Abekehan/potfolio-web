import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import HomePage from './Pages/HomePage'
import Layout from "./components/Layout";
import Projects from './Pages/Projects'
import AuthPage from './pages/AuthPage';
import Contact from './Pages/Contact'
import Inwork from './Pages/Inwork'

function App() {

  return (
    <>
       {/* <Nav />  */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage/>} />
          <Route path = "/projects" element={<Projects/>} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inwork" element={<Inwork />} />
        </Route>
      </Routes>
    </>
  )
}

export default App




