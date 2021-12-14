import Header from '../src/components/molecules/Header'
import Footer from '../src/components/molecules/Footer'
import Hero from '../src/components/organisms/Hero'
import Cta from '../src/components/organisms/Cta'
import Plans from '../src/components/organisms/Plans'
import About from '../src/components/organisms/About'
import TdsTv from '../src/components/organisms/TdsTv'
import TdsPhone from '../src/components/organisms/TdsPhone'
import TdsInternet from '../src/components/organisms/TdsInternet'


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cta />
      <Plans/>
      <TdsInternet/>
      <TdsTv/>
      <TdsPhone/>
      <About/>
      <Footer/>
    </div>
  )
}
