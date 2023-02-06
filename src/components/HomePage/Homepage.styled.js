import styled from "styled-components"

export const Container = styled.main`
    width: 80vw;
    display: flex;
    gap: 20px;
    margin-block: 50px;

    
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        width: 90vw;
    }
   
`