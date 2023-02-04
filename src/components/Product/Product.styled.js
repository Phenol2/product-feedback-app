import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: white;
    padding: 30px 15px;
    margin-bottom: 20px;
    border-radius: 10px;
`

export const Upvotes = styled.div`
    font-size: 10px;
    font-weight: bold;
    color: #230261;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eeebfa;
    padding: 5px;
    border-radius: 8px;

    & > svg{
      color: purple;
    }
`

export const Details = styled.div`
    flex: 1;
`

export const Comments = styled.div`

`