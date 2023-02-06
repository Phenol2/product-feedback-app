import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #eeebfa;
    padding: 7px 18px;
    color:  #5220e8;
    font-size: 12px;
    margin: 8px;
    border-radius: 10px;
    font-weight: bold;
    display: grid;
    place-items: center;


    @media only screen and (max-width: 768px) {
        font-size: 10px;
        padding: 0px 12px;
      }
`