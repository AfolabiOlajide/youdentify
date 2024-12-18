import NavBar from '@/components/navbar/NavBar'
import React from 'react'
import HeroSection from './HeroSection'
import Section from './Section'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Section />
    </div>
  )
}

export default HomePage