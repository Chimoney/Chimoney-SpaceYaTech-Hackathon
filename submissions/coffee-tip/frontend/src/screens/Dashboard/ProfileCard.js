import React from "react";
import { ProfileContainer } from "../../assets/styles";
import { useNavigate } from "react-router-dom";
import ImageBg from "../../assets/coffee-mix.jpeg";
import Form from "./Form";
import melanie from "../../assets/melanie.jpeg";
import {IoMdNotificationsOutline} from "react-icons/io";


const UserProfile = ({name}) => {
  const Navigate = useNavigate();
  return (
    <ProfileContainer>
        <div className="headline">
      <h2>Hi,{name} </h2>
      <div className="box">
        <IoMdNotificationsOutline/>
      <img src={melanie} alt="user headshot" />
      </div>
        </div>
      <div className="img__box">
        <img src={ImageBg} className="bg" alt="colorful background" />
      </div>
      <Form/>
    </ProfileContainer>
  );
};

export default UserProfile;
