import React from 'react';
import { Wrapper } from "./Suggestion.styled"
import { useSelector } from "react-redux"

const Suggestion = () => {
    let { products, } = useSelector(store => store.product)
  return( 
  <Wrapper>
    {
      products.map(product => <div>{product.title}</div>)
    }
  </Wrapper>);
};

export default Suggestion;