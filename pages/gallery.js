import Link from 'next/link'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Contact from '../components/contact'
import Gallery from '../components/gallery'
export default function GalleryPage() {
    return (
      <div>
        <Navbar/>
        <Gallery/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
  