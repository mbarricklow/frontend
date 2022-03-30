import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreens from 'C:/Users/barri/OneDrive/Desktop/django react ecommerce website/frontend/src/screens/Homescreens.js';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Header />
      <Homescreens />
      <main>
        {/* <Container className="py-5">
          <h1>Hello World!</h1>
        </Container> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
