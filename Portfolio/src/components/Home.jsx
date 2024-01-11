import React, { useState } from 'react'

// Components
import AboutPanel from './AboutPanel'
import TechPanel from './TechPanel'
import Header from './Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="Content">
        <AboutPanel />
        <TechPanel />
      </div>
    </>
  )
}
