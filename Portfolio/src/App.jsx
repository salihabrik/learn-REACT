
import './app.scss';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';

import Navbar from './components/navbar/Navbar';
import Test from './Test';

const App = () => {
  return (
  <div>
     <section id='Homepage'>
      <Navbar />
      <Hero/>
    </section>
    <section id='Services'>
      <Parallax type="Services"/>
      </section>
    <section>Services</section>
    <section id='Portfolio'><Parallax type="Portfolio"/> </section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section> 
    {/* <Test/> */}
  </div>
  )
};

export default App;
