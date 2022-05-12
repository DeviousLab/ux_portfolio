
import { About, Footer, Header, Skills, Works, Testimonials } from './containers';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
