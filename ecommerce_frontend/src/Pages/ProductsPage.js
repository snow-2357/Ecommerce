import React from "react";
import Footer from "../Comps/Footer";
import Products from "../Comps/Products";
import styled from "styled-components";
function ProductsPage() {
  return (
    <Container>
      <Products />
    </Container>
  );
}

export default ProductsPage;

const Container = styled.div``;
