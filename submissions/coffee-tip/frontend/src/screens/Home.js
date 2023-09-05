import React from "react";
import Navbar from "../components/HomeNav";
import Footer from "../components/Footer";
import coffee from "../assets/coffee.gif";
import {BsArrowRight} from "react-icons/bs"
import { BtnContainer, HeroContainer, HomeContainer } from "../assets/styles";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  
  const Navigate = useNavigate();

  return (
    <HomeContainer>
      <Navbar status="offline" />
      <section>
        <h2>
          "Send a warm cup of coffee to your special friend to make
          their day brighter!"
          <img src={coffee} alt="animated coffee cup" />
        </h2>
      </section>
        <BtnContainer>
          <button onClick={() => Navigate("/login")}>
            <p>Get Started</p> 
            <BsArrowRight/> 
          </button>

        </BtnContainer>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
