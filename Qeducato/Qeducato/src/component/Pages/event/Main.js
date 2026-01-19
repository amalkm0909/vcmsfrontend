import React from "react";
import Bredcom from "../../Bredcom/Main";
//import Brand from '../../menhomethree/Brand'
import First from "../menevent/First";
import Redslider from "../../menhome/Redslider";
import blogbg1 from "../../../assets/img/bg/event_bg.png";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Our Event" bannerImg={blogbg1}/>
      <First />
      <Redslider />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
