import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCart, KeyboardArrowUp } from "@material-ui/icons";
import { mobile, fullscreen } from "../responsive";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Navbar = ({ user }) => {
  return (
      <Container>
        {/* {console.log(`${user} is loged in`)} */}
        <Wraper>
          {/* logo */}
            <Logo>
              <Link to="/">
              <img src="/logo2.png" alt="logo" />
              </Link>
            </Logo>
          
          {/* search */}
          
          <SearchDiv>
          <Link to ="/allproducts">
            <SearchWraper>
              <Input
                className="input"
                placeholder="Search for products, brands and more"
              />
              <Search style={{ color: "rgb(40, 116, 240)", fontSize: 25 }} />
            </SearchWraper>
            </Link>
          </SearchDiv>
          
          
          
          {/* user cart */}
          <User>
            <LoginWraper>{user ? user : "Log In"}</LoginWraper>
            <MoreWraper>
              {" "}
              More{" "}
              <KeyboardArrowUp
                className="up"
                style={{ color: "white", fontSize: 16 }}
              />
            </MoreWraper>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <CartWraper>
                <p>Cart</p>
                <Badge className="cart" badgeContent={4} color="primary">
                  <ShoppingCart style={{ color: "white" }} />
                </Badge>
              </CartWraper>
            </Link>
          </User>
        </Wraper>
        <SearchDiv2>
          <SearchWraper2>
            <Input
              className="input"
              placeholder="Search for products, brands and more"
            />
            <Search style={{ color: "rgb(40, 116, 240)", fontSize: 25 }} />
          </SearchWraper2>
        </SearchDiv2>
      </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
  background-color: rgb(40, 116, 240);
  overflow-x: hidden;

  ${mobile({ height: "85px" })}
`;
const Wraper = styled.div`
  padding: 10px 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "5px 10px", marginTop: "5px" })}
`;
const Logo = styled.div`
  cursor: pointer;
  flex: 1;
  order: 1;
  img {
    height: 30px;
    padding: 0px 20%;
    ${mobile({ height: "20px", padding: "0px 5%" })}
  }
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ justifyContent: "flex-start" })}
`;

const SearchDiv = styled.div`
  order: 2;
  flex: 1;
  background-color: rgb(245, 245, 245);
  align-items: center;
  justify-content: space-between;
  ${mobile({ display: "none" })}
`;
const SearchWraper = styled.div`
  border: 0.5px solid lightgray;
  height: 35px;
  display: flex;
  align-items: center;

  .input {
    height: 100%;
  }
`;
const SearchDiv2 = styled.div`
  margin: 1px 12px;
  background-color: rgb(245, 245, 245);
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 20px;
  ${fullscreen({ display: "none" })}
`;
const SearchWraper2 = styled.div`
  border: 0.5px solid lightgray;
  height: 35px;
  display: flex;
  align-items: center;

  .input {
    height: 100%;
  }
`;
const Input = styled.input`
  padding: 0px 15px;
  border: none;
  width: 90%;

  &:focus {
    outline: none;
  }
`;

const User = styled.div`
  flex: 1;
  order: 3;
  display: flex;
  padding: 0px 30px;
  align-items: center;
  ${mobile({ justifyContent: "flex-end", padding: "0px 0px" })}
`;
const LoginWraper = styled.div`
  cursor: pointer;
  border: 2px solid white;
  border-radius: 3px;
  padding: 6px 20px;
  color: white;
  font-weight: bold;
  background-color: rgb(40, 116, 240);
  transition: all 0.05s ease-in;
  &:hover {
    background-color: rgb(40, 130, 260);
    transition: all 0.05s ease-in;
  }
  ${mobile({
    border: "1px solid white",
    fontSize: "12px",
    padding: "4px 15px",
  })}
`;

const MoreWraper = styled.div`
  cursor: pointer;
  display: flex;
  font-weight: bold;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
  .up {
    padding: 0px 5px;
    transition: all 0.05s ease-in;
  }
  &:hover {
    .up {
      transform: rotate(180deg);
    }
  }
  ${mobile({ display: "none" })}
`;

const CartWraper = styled.div`
  cursor: pointer;
  padding: 0px 0px;
  font-weight: bold;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  .cart {
    margin: 0px 12px;
    ${mobile({ transform: "scale(0.8)" })}
  }
  p {
    text-decoration: none;
    ${mobile({ display: "none" })}
  }
  p:active {
    text-decoration: none;
  }
`;
