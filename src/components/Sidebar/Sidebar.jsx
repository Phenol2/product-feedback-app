import React from 'react';
import { Wrapper, Board, Menus, Roadmap } from "./Sidebar.styled"
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
    <Roadmap>
      <div>
        <h5>Roadmap</h5>
        <a href = "#">view</a>
      </div>
    </Roadmap>
  </Wrapper>);
};

export default Sidebar;