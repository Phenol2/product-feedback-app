import React from 'react';
import { Wrapper, Board, Menus, Roadmap } from "./Sidebar.styled"
import Cards from "../Layouts/Cards/Cards"

import { useSelector } from "react-redux"


const Sidebar = () => {
  let menus = ["All", "UI", "UX", "Enhancement", "Bug", "Features"]
  let roadmaps = ["planned", "in-progress", "live"]
  let { planned, inProgress, live } = useSelector(store => store.roadmap)


  return( 
  <Wrapper>
    <Board>
      <div>
      <h4>Frontend Mentor</h4>
      <span>Feedback Board</span>
      </div>
    </Board>
    <Menus>
      {
        menus.map((menu, ind) => <Cards key = {ind} menu = { menu} />)
      }
    </Menus>
    <Roadmap >
      <div >
        <h5>Roadmap</h5>
        <a href = "#">view</a>
      </div>
      <div>
        <div planned = "planned"> 
          <span></span> 
          <span>Planned</span> 
          <span>{planned.length}</span>
          </div>
        <div inprogress = "inprogress">  
          <span></span> 
          <span>In-progress</span> 
          <span>{inProgress.length}</span>
          </div>
        <div live = "live"> 
           <span></span> 
           <span>Live</span> 
           <span>{live.length}</span>
           </div>
      </div>
    </Roadmap>
  </Wrapper>);
};

export default Sidebar;