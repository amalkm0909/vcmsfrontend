import React from "react";
import University from "../Menabout/University";
import Bredcom from "../Bredcom/Main";
import Mission from "../Menabout/Mission";
import DirectorMessage from "../Menabout/DirectorMessage";
import Testimonial from "../menhome/Testimonial";
import Brand from "../menhomethree/Brand";
import Redslider from "../menhome/Redslider";
import blogbg3 from "../../assets/img/bg/about_bg.jpg";

function Main() {
  return (
    <>
      <Bredcom
        title="Home"
        subtitle="About Us"
        bannerImg={blogbg3}
      />
      <University />
      <Mission />
      <DirectorMessage />
      <Testimonial />
      {/* <Brand /> */}
      <Redslider />
    </>
  );
}

export default Main;
