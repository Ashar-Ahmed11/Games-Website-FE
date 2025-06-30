import React, { useContext } from 'react';
import AppContext from '../components/context/appContext';

import GameDevServ from './GameDevServ';
import MajorViewPoints from './MAjorViewPoints';
import Aboutus from './Aboutus';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Plans from './Plans';
import ClientTestimonials from './ClientTestimonials';
import FAQ from './FAQ';
import Footer from './Footer';

const Home = () => {
  const { homeLoader } = useContext(AppContext); // Get from global context

  if (homeLoader) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border " role="status" style={{color:'#151ed3'}}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <GameDevServ />
      <MajorViewPoints />
      <Aboutus />
      <WhyChooseUs />
      <Services />
      <Plans />
      <ClientTestimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
