import Link from 'next/link'
import About from '../components/about'
import Contact from '../components/contact'
import Doors from '../components/doors'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Homeproject from '../components/homeproject'
import Navbar from '../components/navbar'
import Product from '../components/product'


export default function IndexPage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Product/>
      <Doors/>
      <Homeproject/>
      <Contact/>
      <Footer/>
    </div>
  )
}
