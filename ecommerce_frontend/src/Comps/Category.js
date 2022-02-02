import React from 'react'
import { mobile } from "../responsive";
import styled from 'styled-components';

const Category = ({item}) => {
    return (
        <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Container>
    )
}

export default Category
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 20vh;
  position: relative;
  ${mobile({ height: "10vh" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "10vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "10vh" })}
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    ${mobile({ fontSize: "20px",marginBottom: "10px" })}
`;

const Button = styled.button`
    border:none;
    padding: 7px 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    &:hover{
      background-color: #eeeeee;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      transition: all .02s ease-in;
    }
    ${mobile({ fontSize: "10px" ,padding: "5px 8px"})}
`;