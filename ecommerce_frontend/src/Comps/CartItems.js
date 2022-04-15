import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CartItems({ data }) {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_LINK}/product/find/${data.productId}`)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {console.log(data.productId)}
      {console.log(datas)}
      {datas && <Product>
        <ProductDetail>
           <Image src={datas.img} />
          <Details>
          <b>Product:</b>{datas.title} 
            <ProductColor color="black" />
            <ProductSize>
              <b>price:</b> {datas.price}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer></ProductAmountContainer>
          <ProductPrice>$ 30</ProductPrice>
        </PriceDetail>
      </Product>}
      <Hr />
    </>
  );
}
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
