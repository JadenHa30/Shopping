import React from 'react';
import { Container } from 'reactstrap';
import Navbar from './components/Navbar'
import MainConent from './components/MainContent';
import Jumbo from './components/Jumbo';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Navbar/>
        <Jumbo/>
        <MainConent/>
        <Footer/>
    </>
  );
}

export default App;
