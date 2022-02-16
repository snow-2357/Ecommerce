import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice";
const Login = () => {
  //const logingdata=useSelector((state)=>state.user.currentUser)
  const dispatch = useDispatch();
  const [userName,SetUserName]   =useState("");
  const [email,SetEmail]         =useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = {
      username: userName,
      password: email,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/api/auth/login", data)
      .then((response) => {
        console.log(response.data);
        dispatch(loginSuccess(response.data.username));
      })
      // .then(json => console.log(json))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="username" onChange={event => SetUserName(event.target.value)} />
          <Input placeholder="email" onChange={event => SetEmail(event.target.value)} />
          <Button>LOGIN</Button>
          {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link> */}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

//styles

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 100;
`;
const Wrapper = styled.div`
  z-index: 10;
  width: 25%;
  padding: 20px;
  background-color: rgb(245, 245, 245);
  ${mobile({ width: "75%" })}
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding-left: 55px;
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
  font-weight: bold;
  color: rgb(40, 116, 240);
  cursor: pointer;
`;
