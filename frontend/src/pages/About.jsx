import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'

const About = () => {
  return (
    <>
      <Hero title={"Learn More about ZeeCare Medical Institue"} imageUrl={"/about.png"}/>
      <Biography imageUrl={"/whoweare.png"}/>
    </>
  )
}

export default About
