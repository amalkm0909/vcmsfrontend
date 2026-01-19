import React from "react";
import Bredcom from "../../Bredcom/Main";
import Brand from "../../menhomethree/Brand";
import Redslider from "../../menhome/Redslider";
import First from "../menfaq/First";
import blogbg7 from "../../../assets/img/bg/faq_bg.jpg";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="FAQs" bannerImg={blogbg7} />
      
      <First />
      <Redslider />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
