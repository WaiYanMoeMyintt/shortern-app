import React from 'react'
import Navbar from './Navbar/Navbar'
import "./index.css";
import Header from './Header/Header';
import Short from './Short/Short';
import Card from './Card/Card';
import Global from './Global/Global';
import "swiper/css/bundle";
import Slider from './Slider/Slider';
import Company from './Company/Company';
import Question from "./Question/Question.jsx";
import Footer from './Footer/Footer';

const App = () => {
  return (
      <>
         <Navbar />
         <Header />
         <Short />
         <Card />
         <Global />
         <Slider />
         <Company />
         <Question />
         <Footer />
      </>
  )
}

export default App