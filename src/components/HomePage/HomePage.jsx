import React from 'react';
import { Container } from "./Homepage.styled"
import Sidebar from "../Sidebar/Sidebar"
import Suggestion from "../Suggestion/Suggestion"
import { useSelector } from "react-redux"

const HomePage = () => {
  let { products, } = useSelector(store => store.product)
  return( 
  <Container>
    <Sidebar />
    <Suggestion />
  </Container>);
};

export default HomePage;
