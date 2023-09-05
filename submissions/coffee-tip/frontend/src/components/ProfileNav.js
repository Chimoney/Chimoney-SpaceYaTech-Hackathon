import React from "react";
import brand from "../assets/brand.png";
import coin from "../assets/coin.gif";
import { NavContainer } from "../assets/styles";


const ProfileNav = () => {
  return (
    <NavContainer>
      <div className="desktop">
        <a href="/" className="brand">
          <img src={brand} alt="standage" />
          <h1>Coffee 'Tweet'</h1>
        </a>

        <div className="balance">
          <img src={coin} alt="coin" />
          <p>Balance:</p>
          <p className="gold" >10,000 Chimoney</p>
        </div>
      </div>
    </NavContainer>
  );
};



export default ProfileNav;
