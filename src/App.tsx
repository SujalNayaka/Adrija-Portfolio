import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Travel from './components/Travel';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-peach/20 to-rose-50">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Travel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;