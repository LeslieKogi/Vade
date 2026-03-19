import Hero from '../components/Hero'
import ProductSection from '../components/ProductSection'
import ContactForm from '../components/ContactForm'

function Home() {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="products"><ProductSection /></section>
      <section id="contact"><ContactForm /></section>
    </>
  )
}
export default Home