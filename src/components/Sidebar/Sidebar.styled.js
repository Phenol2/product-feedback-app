import styled from "styled-components"


const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

export const Wrapper = styled.section`
    flex: 1; 
    display: flex;
    flex-direction: column;
    position: relative;


    @media ${device.tablet} {
      flex-direction: row;
      gap: 20px;
      width: 80vw;
  }

  @media ${device.mobileL} {
    & > div:nth-child(2){
      display: none;
    }
  }
`

export const Board = styled.div`
background-color: #5220e8;
width: 100%; 
color: white;
padding: 70px 20px 15px 20px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 10px;

& > svg{
  font-size: 25px;
  display: none;
}


 & > span{
   font-size: 14px;
   margin-block: 6px;
 }

 @media ${device.tablet} {
  width: 30%;
  padding: 120px 10px 10px 10px;
  height: 200px;
}

@media ${device.mobileS} {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  border-radius: 0px;
  padding: 15px ;
  height: 80px;

  & > span{
    font-size: 8px;
  }

  & > h4{
    font-size: 13px;
  }
}

@media ${device.mobileM} {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  border-radius: 0px;
  padding: 15px ;
  height: 80px;

  & > span{
    font-size: 8px;
  }

  & > h4{
    font-size: 13px;
  }
}

@media ${device.mobileL} {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  border-radius: 0px;
  padding: 15px ;
  height: 80px;

  & > svg{
    font-size: 25px;
    display: flex;
  }
  

  & > span{
    font-size: 8px;
  }

  & > h4{
    font-size: 13px;
  }
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

@media ${device.tablet} {
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