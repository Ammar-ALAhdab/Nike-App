import Nav from './components/Nav'
import CustomersReviews from './sections/CustomersReviews'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import Services from './sections/Services'
import SpecialOffers from './sections/SpecialOffers'
import Subscribe from './sections/Subscribe'
import SuperQuality from './sections/SuperQuality'

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="hero xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomersReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
)

export default App
