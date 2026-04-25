import Hero from '../components/Hero'
import ProductSection from '../components/ProductSection'
import ContactForm from '../components/ContactForm'
import { useState } from 'react'

function Home() {
  const [search, setSearch] = useState('')
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="products"><ProductSection /></section>
      <section id="contact"><ContactForm /></section>
    </>
  )
}
export default Home