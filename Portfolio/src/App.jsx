import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </main>
    </>
  )
}

export default App
