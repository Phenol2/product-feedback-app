import React from "react"
import { Container, Upvotes,Details, Comments} from "./Product.styled"

const Product = ({ upvotes, comments, title }) => {
  let commentLength = (comments?.length) ? (comments?.length) : 0
  
  
  return (
    <Container>
      <Upvotes>
        {upvotes}
      </Upvotes>
      <Details>{ title}</Details>
      <Comments>
        { commentLength }
      </Comments>
    </Container>

  )
}

export default Product