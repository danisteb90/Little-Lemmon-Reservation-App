import React from 'react';
import Dishes from './components/Dishes';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Dishes />
      <Testimonials />
      <Reservation />
      <Footer />
    </>
  )
}

export default App
