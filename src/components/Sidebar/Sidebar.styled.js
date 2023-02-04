import styled from "styled-components"

export const Wrapper = styled.section`
    flex: 1;

   & > div:nth-child(1){
    background-color: #5220e8;
    width: 100%; 
    color: white;
    padding: 70px 20px 15px 20px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;


     & > span{
       font-size: 14px;
       margin-block: 6px;
     }
   }
`