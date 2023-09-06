import React, { useEffect, useState } from "react";
import Navbar from "../../components/HomeNav";
import Footer from "../../components/Footer";
import {HomeContainer } from "../../assets/styles";
import { useNavigate } from "react-router-dom";
import UserProfile from "./ProfileCard";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");
const wallet = cookies.get("WALLET")

const Index = () => {
  
  const Navigate = useNavigate();

    // set an initial state for the message we will receive after the API call
    const [user, setUser] = useState("");

    // useEffect automatically executes once the page is fully loaded
    useEffect(() => {
      // set configurations for the API call here
      const configuration = {
        method: "get",
        url: "http://localhost:5001/auth",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      // make the API call
      axios(configuration)
      .then((result) => {
        console.log(result)
        console.log(cookies, wallet)
          setUser(result.data.name);
        })
        .catch((error) => {
          error = new Error();
        });
    }, []);
  
  
    // logout
    const logout = () => {
      // destroy the cookie
      cookies.remove("TOKEN", { path: "/" });
      // redirect user to the landing page
      window.location.href = "/";
    }
  

  return (
    <HomeContainer>
      <Navbar status="online" logout={logout}/>
            <UserProfile user={user} wallet={wallet}/>
      <Footer />
    </HomeContainer>
  );
};

export default Index;
