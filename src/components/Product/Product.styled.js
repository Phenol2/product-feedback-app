import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
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


    & > p{
        font-size: 11px;
        padding-block: 10px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 500;
    }

    & > span{
        text-transform: capitalize;
        font-size: 10px;
        font-weight: bold;
        background-color: #eeebfa;
        border-radius: 8px;
        padding: 6px 10px;
        color: #5b6ff0;
    }
`

export const Comments = styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 3px;

    & > svg{
        color: #bdc6fc;
    }
`