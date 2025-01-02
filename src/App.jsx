import React from "react";
import Navbar from "./components/Navbar";
import HomeCarousel from "./components/HomeCarousel";
import "./App.css";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ServicesPage from "./components/ServicesPage";
import Certificates from "./components/Certificates";
import SliderWithText from "./components/SliderWithText";
import SliderWithText11 from "./components/SliderWithText11";
import SliderWithText2 from "./components/SliderWithText2";
import SliderWithText111 from "./components/SliderWithText111";
import SliderWithText22 from "./components/SliderWithText22";
import SliderWithText1111 from "./components/SliderWithText1111";
import ContactForm from "./components/ContactForm";
import SliderWithText222 from "./components/SliderWithText222";
import IranProductsPage from "./components/IranProductsPage";
import SliderWithText01 from "./components/SliderWithText01";
import SliderWithText11111 from "./components/SliderWithText11111";






function App() {
  return (
    <>
      <Navbar />
      <div className="mainOfPadd">
        <HomeCarousel />
      </div>

      
      <section id="about">
      <AboutSection/>
      </section>
      <ServicesPage/>
      <section id="services">
      <Certificates />
      </section>
      <SliderWithText01 />
      <SliderWithText />
      <SliderWithText11/>
      <SliderWithText2/>
      <SliderWithText111 />
      <SliderWithText22 />
      <SliderWithText1111 />
      <SliderWithText222 />
      <SliderWithText11111 />
      <section id="contact">
      <ContactForm />
      </section>
      <IranProductsPage />
      <Footer />
    </>
  );
}

export default App;
