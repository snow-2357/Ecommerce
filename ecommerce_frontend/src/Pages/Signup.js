import { useState } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import axios from 'axios';
const Signup = () => {
  const [userName,SetUserName]   =useState("");
  const [email,SetEmail]         =useState("");
  const [password1,SetPassword1] =useState("");
  const [password2,SetPassword2] =useState("");
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    
    const data = {
      username : userName,
      email    : email,
      password : password1,
    } 
    console.log(data);
   
    axios.post(process.env.REACT_APP_BASE_LINK, data)
    .then(response => {
      console.log(response.data);
      alert(`logedin as ${response.data.username}`)
    })
    .catch(err=>{
      console.log(err);
    })
      
  }

  
  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form  onSubmit={handleSubmit} >
          <Input placeholder="username" onChange={event => SetUserName(event.target.value)} />
          <Input placeholder="email" onChange={event => SetEmail(event.target.value)} />
          <Input placeholder="password" onChange={event => SetPassword1(event.target.value)} />
          <Input placeholder="confirm email" onChange={event => SetPassword2(event.target.value)} />
          <Button>SIGN UP</Button>
        </Form>
        {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link> */}
      </Wrapper>
    </Container>
  );
};

export default Signup;
const Container= styled.div`
background-color: rgba(0,0,0,.9);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  z-index: 100;
  `;
const Wrapper = styled.div`
    z-index: 10;
  width: 25%;
  padding: 20px;
  background-color: rgb(245,245,245);
  ${mobile({ width: "75%" })}
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding-left:55px;


`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 70%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  
  width: 75%;
  border: none;
  padding: 12px 20px;
  background-color: rgb(40, 116, 240);
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  font-weight:bold;
 color: rgb(40, 116, 240);
  cursor: pointer;
`;

