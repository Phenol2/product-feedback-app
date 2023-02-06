import React from "react"
import { Container, Upvotes,Details, Comments} from "./Product.styled"

import {FaCaretUp} from "react-icons/fa"

const Product = ({ upvotes, comments, title, description }) => {
  let commentLength = (comments?.length) ? (comments?.length) : 0
  
  
  return (
    <Container>
      <Upvotes>
      <FaCaretUp />
        {upvotes}
      </Upvotes>
      <Details>
        <h5>{title}</h5>
        <p>{ description}</p>
      </Details>
      <Comments>
        { commentLength }
      </Comments>
    </Container>

  )
}

export default Product