import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HeroSection from './components/WebsiteComponents/HeroSection/heroSection'
import Features from './components/WebsiteComponents/FeaturesSection/Features'
//import Example from './components/WebsiteComponents/Example/example'
import NavBar from './components/WebsiteComponents/NavBar/navBar'
import AltNavBar from './components/WebsiteComponents/NavBar/altNavBar'

export default function App() {
  return (
    <div className="App">
      <AltNavBar/>
      <HeroSection />
      {/* <Features /> */}
    </div>
  );
}







