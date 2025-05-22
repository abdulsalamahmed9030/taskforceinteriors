import React from 'react'
import Header from './components/navbar/Header'
import HeroSection from './components/herosection/HeroSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import RangeOfServices from './components/RangeOfServices'
import AboutUs from './components/AboutUs'
import TaskForceSection from './components/TaskForceSection'
import TeamSection from './components/TeamSection'
import StatisticsSection from './components/Statistics'
import MapSection from './components/MapSection'
import Copyright from './components/Copyright'

const page = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutUs />
    <RangeOfServices />
    <TaskForceSection />
    <TeamSection />
    <StatisticsSection />
    <MapSection />
    <Footer />
    <Copyright />
    <BackToTop />
    </>
  )
}

export default page