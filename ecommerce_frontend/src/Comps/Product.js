import styled from "styled-components";

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
    </Container>
  );
};

export default Product;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Container = styled.div`
  cursor: pointer;
  padding:25px;
  margin: 25px;
  min-width: 280px;
  height: 300px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Image} {
    transform: scale(1.05);
    transition: ease-in-out;
  }
`;
