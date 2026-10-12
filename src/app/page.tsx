import AboutUs from "./components/AboutUs";
import ContactRfq from "./components/ContactRfq";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Recognitions from "./components/Recognitions";
import Services from "./components/Services";
import SourcingFaq from "./components/SourcingFaq";
import StatsBanner from "./components/StatsBanner";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero></Hero>
      <AboutUs/>
      <Products/>
      <Services/>
      <HowWeWork/>
      <WhyChooseUs/>
      <Recognitions/>
      <StatsBanner/>
      <Gallery/>
      <SourcingFaq/>
      <ContactRfq/>
      <Footer/>
    </main>
  );
}