import React from "react";
import { ProfileContainer } from "../../assets/styles";
import { useNavigate } from "react-router-dom";
import ImageBg from "../../assets/coffee-mix.jpeg";
import Form from "./Form";
import melanie from "../../assets/melanie.jpeg";
import { IoMdNotificationsOutline } from "react-icons/io";



const UserProfile = ({ user,wallet }) => {
  const Navigate = useNavigate();
  return (
    <ProfileContainer>
      <div className="headline">
        <h2>Hi {user}, </h2>
        <div className="box">
          <IoMdNotificationsOutline />
          <img src={melanie} alt="user headshot" />
        </div>
      </div>
      <div className="img__box">
        <img src={ImageBg} className="bg" alt="colorful background" />
      </div>
      <section className="wallet">
        {wallet.map((item) => (

          <div>
          <h3>{item.type}</h3>
          <p>Balance: {item.balance}</p>
        </div>
          ))}
      </section>
      <Form user={user} />
    </ProfileContainer>
  );
};

export default UserProfile;
