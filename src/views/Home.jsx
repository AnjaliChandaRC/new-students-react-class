import React from 'react'
import Hero from '../components/home/Hero'
import Footer from '../components/common/Footer'
import EmailJsPractice from '../components/home/EmailJsPractice'
import LottiePractice from '../components/home/LottiePractice'
import MapCards from '../components/home/MapCards'
import PropsPractice from '../components/home/PropsPractice'
import UseStatePrac from '../components/home/UseStatePrac'
import UseEffectPrac from '../components/home/UseEffectPrac'
import UseLocationPrac from '../components/home/UseLocationPrac'
import ViewLessCards from '../components/home/ViewLessCards'
import Dashboard from '../components/home/Dashboard'
import FormValidation from '../components/home/FormValidation'
import CustomAccordion from '../components/home/CustomAccordion'

const Home = () => {
  return (
    <>
      <FormValidation/>
      <Hero />
      <MapCards />
      <PropsPractice />
      <UseStatePrac/>
      <UseEffectPrac />
      <UseLocationPrac />
      <EmailJsPractice />
      <LottiePractice />
      <ViewLessCards />
      <CustomAccordion/>
      <Footer />
        <Dashboard />
    </>
  )
}

export default Home