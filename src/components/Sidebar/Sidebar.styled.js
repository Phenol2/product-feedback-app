import styled from "styled-components"

export const Wrapper = styled.section`
    flex: 1;

   
`

export const Board = styled.div`
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
`

export const Menus = styled.div`
background-color: #fff;
width: 100%; 
padding: 50px 15px ;
display: flex;
flex-wrap: wrap;
border-radius: 10px;
margin-block: 30px;


 & > span{
   font-size: 14px;
   margin-block: 6px;
 }
`