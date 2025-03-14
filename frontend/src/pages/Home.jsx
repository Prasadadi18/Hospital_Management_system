import React,{useContext} from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Department from '../components/Department'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
    <>
      <Hero title={"Welcome to ZeeCare Medical Institue ! Your trusted Medical Institute"} imageUrl={"/hero.png"} />
      <Biography imageUrl={"/about.png"}/>
      <Department />
      <MessageForm />
    </>
  )
}

export default Home
