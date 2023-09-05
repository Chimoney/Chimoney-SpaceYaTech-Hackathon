import { styled } from "styled-components";

export const NavContainer = styled.div`
  max-width: 1700px;
  background: #ffffff;
  border-bottom:1px solid #E8E8E8;
  padding: 17px 24px;
  padding-bottom: 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  a {
    font-weight: 500;
    text-align: center;
    display: inline-flex;
    text-decoration: none;
    color:#7f5539;

    &:hover {
      font-weight: 600;
      cursor: pointer;
    }
  }

  button{
    width: 140px;
    height: 45px;
    font-weight: 500;
    font-size: 14px;
    border: transparent;
    border-radius: 15px;
    background-color: #7f5539;
    color:#fff;
    svg{
      color:#fff;
      font-weight: 500;
      margin-left: 10px;
  
      &:hover {
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  h1 {
    font-size: 36px;
    margin-top: 23px;
    letter-spacing: 0.03em;
    line-height: 32px;
    font-family: 'Cookie', cursive;
  }

  .balance {
    display: flex;
    gap: 10px;
    p{
      font-weight: 600;
     margin-top: 25px;
     display: none;
    }
    .gold{
      display: block;
     color:#76520e;
    }
  }

  /* large screen */
  .desktop {
    display: flex;
    box-shadow: 0px 5px 15px rgba(153, 153, 153, 0.05);
    justify-content: space-between;
    align-items: center;
    height: 66px;
    a + button {
      margin-left: 25px;
    }
    img {
      width: 36px;
      height: 56px;
      object-fit: contain;
      align-self: baseline;
    }
  }

  //maximum screen size
  @media (min-width: 1700px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .desktop {
      width: 1700px;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (min-width: 768px) {
    padding: 17px 73px;
    padding-bottom: 0;

    .desktop {
      justify-content: space-between;
      align-items: center;

    }
  }
  
  @media (min-width: 550px) {

    .balance p {
      display: block;
    }
  }
`;

export const BtnContainer = styled.div`
width: 100%;
margin: 40px auto;
text-align: center;
button{
  width: 200px;
  height: 50px;
  background-color:#7f5539;
  border: transparent;
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:hover{
    border: 2px solid #F1A640;
    cursor: pointer;

  }

  p{
    font-size: 18px;
  color: #fff;
  font-weight: 600;
  }
  svg{
    font-size: 20px;
    color: #fff;
  }
}
`;

export const HomeContainer = styled.main`
background: #fff;

section{
  max-width: 600px;
margin: 0 auto;
margin-top: 140px;
padding:0 24px ;

h2{
    color: #52525b;
    text-align: center;
    font-size: 56px;
    font-weight: 500;
    letter-spacing: 0.03em;
    font-family: 'Cookie', cursive;
    
}

img{
    width: 48px;
    object-fit: cover;
}
}

@media (min-width: 700px){
  width: 95%;
  margin: 0 auto;
}
`;

export const Flexbox = styled.div`
display: flex;
gap: 15px;
flex-direction: row;
align-items: center;
justify-content: center;

a{
  cursor: pointer;
  font-size: 16px;
}

`;

export const FormContainer = styled.main`
/* background-color: #fff;
height: 100vh; */
.login {
  width: 420px;
  padding: 8% 0 0;
  margin: auto;
}


.form {
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 10px;
  max-width: 400px;
  margin: 15% auto;
  padding: 45px;
  text-align: center;
 
  input {
    outline: 0;
    background: #DEDBD6;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    
  }
  
  button {
    text-transform: uppercase;
    outline: 0;
    background: #7f5539;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    
    &:active {
      background: #b08968;
    }
  }
  
  span {
    font-size: 40px;
    color: #7f5539;
    margin-bottom: 25px;
    display: block;
  }
  
  p.error {
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: left;
    font-size: 14px;
    color: red;
  }

  p.account{
    margin-top: 15px;
    font-size: 14px;

    a{
      font-weight: 600;
      color: #7f5539;
    }
  }
} 



`;

export const ProfileContainer = styled.main`
padding: 50px 0;
margin:0  100px ;


.headline{
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-right: 100px; */

  h2{
    /* margin-left: 140px; */
  }
img{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 40px;
}
}

.box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg{
    font-size: 35px;
    color: #9C5E37;
    margin-right: 30px;
  }
}

.img__box{
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: center;
 img{
    width: 95%;
    margin: 20px auto;
    object-fit: cover;
    height: 350px;
    border-radius: 30px;
  }
}
`;

export const FooterContainer = styled.footer`
/* position: fixed;
bottom: 0; */
border-top:1px solid #E8E8E8;
margin-top: 300px;
padding-top: 10px;
text-align: center;
/* background-color:#76520e; */
width: 100%;
a{ 
     color: #5e5e66;
      font-style:cursive;
      font-weight: 600;
    text-decoration: underline;
    }
p{
    color: #5e5e66;
    font-size: 14px;
    padding: 10px 0;
    font-weight: 500;
}
`;