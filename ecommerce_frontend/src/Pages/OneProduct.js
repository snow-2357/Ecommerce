import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import axios from "axios";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShoppingCart } from "@material-ui/icons";
const OneProduct = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_LINK}/product/find/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  
  
  if(product===null)
    return(
      <div>
        loding
        {console.log("null")}
      </div>
    )
  else
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          {product && <Image src={product.img} />}
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="silver" />
             
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>245GB</FilterSizeOption>
                <FilterSizeOption>526GB</FilterSizeOption>
                <FilterSizeOption>1TB</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
           
            <Button>
            <ShoppingCart style={{ color: "white" }} />
             <p> ADD TO CART</p>
             </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default OneProduct;
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  max-width:380px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
color:white;
  display:flex;
  padding: 15px 30px;
  background-color: rgb(255, 159, 0);
  cursor: pointer;
  border :none;
  font-weight: 500;
  border-radius: 5px;
  &:hover{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  p{
    padding:2px;
  }
`;