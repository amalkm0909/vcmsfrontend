import React from "react";
import Bredcom from "../../Bredcom/Main";
import Brand from "../../menhomethree/Brand";
import Redslider from "../../menhome/Redslider";
import First from "../mengallery/First";
import blogbg4 from "../../../assets/img/bg/gallery_bg.jpg";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Our Gallery" bannerImg={blogbg4}/>
      <First />
      <Redslider />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
