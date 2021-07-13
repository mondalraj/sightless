import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import ContactScreen from './components/ContactScreen';
import AboutScreen from './components/AboutScreen';
import ProjectScreen from './components/ProjectScreen';
import ServicesScreen from './components/ServicesScreen';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <HomeScreen />
      <ContactScreen />
      <AboutScreen />
      <ProjectScreen />
      <ServicesScreen />
      <Footer />
    </div>
  );
}

export default App;
