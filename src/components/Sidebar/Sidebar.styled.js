import styled from "styled-components"

export const Wrapper = styled.section`
    flex: 1; 
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
      flex-direction: row;
      gap: 20px;
  }
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

 @media only screen and (max-width: 768px) {
  width: 30%;
  padding: 120px 10px 10px 10px;
  height: 200px;
}
`

export const Menus = styled.div`
background-color: #fff;
width: 100%; 
padding: 20px 25px;
display: flex;
flex-wrap: wrap;
border-radius: 10px;
margin-block: 30px;

@media only screen and (max-width: 768px) {
  width: 30%;
  height: 200px;
  display: flex;
}
`

export const Roadmap = styled.div`
background-color: #fff;
width: 100%; 
padding: 20px 25px;
display: flex;
flex-direction: column;
gap: 20px;
border-radius: 10px;
margin-block: 30px;

& > div:nth-child(1){
  display: flex;
  justify-content: space-between;
  width: 100%;
}

& > div:nth-child(2){
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;

  & > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;


    & > span:nth-child(1){
      background-color: purple;
      width: 8px;
      height: 8px;
      border-radius: 50%;
  }

    & > span:nth-child(2){
      font-weight: bold;
      color: rgba(0, 0, 0, 0.6);
      flex: 1;
    }

    & > span:nth-child(3){
        font-weight: bold;
    }
  }
}

@media only screen and (max-width: 768px) {
  width: 30%;
  padding:  20px;
  height: 200px;
  justify-content: center;
}
`