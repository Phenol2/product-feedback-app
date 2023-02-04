import React from 'react';
import { Wrapper } from "./Cards.styled"

const Cards = ({ menu }) => {
console.log(menu)
  return( 
  <Wrapper>
    { menu }
  </Wrapper>);
};

export default Cards;