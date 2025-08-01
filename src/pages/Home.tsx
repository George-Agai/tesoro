import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Features } from '../components/features';
import { Footer } from '../components/footer';
import { Freedom } from '../components/freedom';

function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Freedom/>
      <Footer />
    </div>
  )
}

export default Home
