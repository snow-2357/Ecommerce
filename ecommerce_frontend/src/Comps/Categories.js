import React from 'react'
import { mobile } from "../responsive";
import { categories } from "../data"
import Category from './Category'
import styled from 'styled-components';

const Categories = () => {
    return (
        <Container>
            {categories.map(item=>(
                <Category item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px" })}
`;