import React from 'react';
import Footer from '../Comps/Footer';
import Navbar from '../Comps/Navbar';
import Products from '../Comps/Products'
import styled from "styled-components";
function ProductsPage() {
  return <Container>
      <Navbar />
      <Products />
      <Footer />
  </Container>;
}

export default ProductsPage;

const Container = styled.div``;