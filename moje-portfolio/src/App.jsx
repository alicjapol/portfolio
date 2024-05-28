import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import Header from './components/Header/Header';
// import Footer from './components/Footer';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Header />
      {/* <About />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
    </ChakraProvider>

  );
}

export default App;
