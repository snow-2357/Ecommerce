import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CartItems({ data }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_LINK}/product/find/${data.productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    <>
      <Hr />
      {product && (
        <Product>
          <ProductDetail>
            <Image src={product.img} />
            <Details>
              <b>Product:</b>
              {product.title}
              <ProductColor color="black" />
            </Details>
          </ProductDetail>
          <PriceDetail>
            <ProductAmountContainer></ProductAmountContainer>
            <ProductPrice>$ {product.price}</ProductPrice>
          </PriceDetail>
        </Product>
      )}
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
  height:250px;
`;

const Details = styled.div`
position: absolute;
left:280px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  b{
      padding-bottom:20px;
  }
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

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
