import React from 'react';
import { Wrapper } from "./Suggestion.styled"
import { useSelector } from "react-redux"
import Product from "../Product/Product"

const Suggestion = () => {
    let { products, } = useSelector(store => store.product)
    
  return( 
  <Wrapper>
    {
      products.map(product => <Product key = {product.id} { ...product }/>)
    }
  </Wrapper>);
};

export default Suggestion;