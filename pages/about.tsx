import React from 'react'
import NavBar from './component/Navbar'
import Footer from './component/Footer'
import SEO from './component/SEO'
import Hero from './component/Hero'
import Highlight from './component/Hightlight'

export default function Home() {

  return (
    <>
      <SEO />
      <NavBar/>
      <main>
       <Hero />
       <Highlight />
      </main>
      <Footer />
    </>
  )
}
 