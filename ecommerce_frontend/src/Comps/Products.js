import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_LINK}/product`)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(datas);
  // console.log("hey sima");
  return (
    <>
      {datas && (
        <Container>
          {datas.map((item) => (
            <Link to={`/deal/${item._id}`} key={item._id}>
              <Product item={item} key={item._id} />
            </Link>
          ))}
        </Container>
      )}
    </>
  );
};

export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
