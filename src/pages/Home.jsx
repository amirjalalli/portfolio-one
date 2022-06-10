import React from "react";
import About from "../components/About/About";
import Aside from "../components/Aside/Aside";
import Introduction from "../components/Introduction/Introduction";
import Main from "../components/Main/Main";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Service from "../components/Service/Service";
import Customer from "../components/Customer/Customer";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <div className="contanier">
        <Introduction />
        <Aside />
        <About />
        <Main />
        <FeaturedProjects />
        <Service />
        <Customer />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
