import React from 'react';
import { Wrapper, Board, Menus } from "./Sidebar.styled"
import Cards from "../Layouts/Cards/Cards"

const Sidebar = () => {
  let menus = ["All", "UI", "UX", "Enhancement", "Bug", "Features"]

  return( 
  <Wrapper>
    <Board>
      <h4>Frontend Mentor</h4>
      <span>Feedback Board</span>
    </Board>
    <Menus>
      {
        menus.map((menu, ind) => <Cards key = {ind} menu = { menu} />)
      }
    </Menus>
    <div>
    </div>
  </Wrapper>);
};

export default Sidebar;