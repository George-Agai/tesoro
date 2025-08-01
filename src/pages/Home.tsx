import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Features } from '../components/features';
import { Footer } from '../components/footer';
import { Freedom } from '../components/freedom';
import { SecuritySection } from '../components/walletcontrol';

function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Freedom/>
      <SecuritySection/>
      <Footer />
    </div>
  )
}

export default Home
