import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import Nav from './Nav.js';
import Header from './Header.js';
import Waves from './Waves.js';
import Expertise from './Expertise.js';
import Strategic from "./Strategic.js";
import Team from './Team.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Waves />
    <Expertise />
    <Strategic />
    <Team />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);
