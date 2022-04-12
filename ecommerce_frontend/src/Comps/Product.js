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
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Image} {
    transform: scale(1.05);
    transition: ease-in-out;
  }
`;
