import { useState } from 'react'
import Nav from './Components/Nav'
import Hero from './sections/Hero'
import CustomerReviews from './sections/CustomerReviews'
import Footer from './sections/Footer'
import PopularProducts from './sections/PopularProducts'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import Subscribe from './sections/Subscribe'
import SuperQuality from './sections/SuperQuality'


const App = () => (
  <main className='relative'>
    <Nav />
    <section className='xl:padding-l
    wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProducts />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding-x padding-y'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffer /> 
    </section>
    <section className='bg-pale-blue
    padding'>
      <CustomerReviews /> 
    </section>
    <section className='padding-x 
    sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    <section className='padding-x padding-t bg-black
    pb-8'>
      <Footer />
    </section>
  </main>
);

export default App
