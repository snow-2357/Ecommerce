import styled from "styled-components";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import axios from "axios";
import CartItems from "../Comps/CartItems";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Clear } from "@material-ui/icons";
const Cart = () => {
  const user = useSelector((state) => state.user.currentUser);
  const userId = useSelector((state) => state.user.UserId);
  // console.log(user, userId);
  //get items
  const [products, setProducts] = useState(null);
  const [productId, setproductId] = useState();
  const [count, setCount] = useState(0);
  const handleDelete = (e, productId) => {
    e.preventDefault();
    setproductId(productId);
    console.log(productId);
    const data = {
      productId: productId,
      quantity: 1,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_LINK}/cart/delete/${userId}`, data)
      .then((response) => {
        console.log(response.data);
        setCount(count + 1);
      })
      // .then(json => console.log(json))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_LINK}/cart/find/${userId}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId, productId, count]);

  return (
    <Container>
      <Wrapper>
        <Title>MY BAG</Title>
        <Top>
          <TopButton>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              CONTINUE SHOPPING
            </Link>
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {products &&
              products.map((x) => (
                <CartItemWraper>
                  <CartItems key={x._id} data={x} />
                  <Clear
                    onClick={(e) => handleDelete(e, x.productId)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      padding: "3px",
                      border: "1px solid black",
                      borderRadius: "50%",
                    }}
                  />
                </CartItemWraper>
              ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  position: relative;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const CartItemWraper =styled.div`
  position:relative;
`;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  color: white;
  display: flex;
  padding: 15px 30px;
  background-color: rgb(40, 116, 240, 0.9);
  cursor: pointer;
  border: none;
  font-weight: 500;
  border-radius: 5px;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  p {
    padding: 2px;
  }
`;

const TopButton = styled(Button)`
  background-color: rgb(40, 116, 240, 0.9);
  height: 40px;
  padding: 10px 20px;
`;
