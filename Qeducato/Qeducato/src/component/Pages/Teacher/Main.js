import React from "react";
import Bredcom from "../../Bredcom/Main";
import Brand from "../../menhomethree/Brand";
import Redslider from "../../menhome/Redslider";
import First from "../menteacher/First";
import Expert from "../../menhomethree/Expert";
import blogbg from "../../../assets/img/bg/banner_all.jpg"; // Updated: Added banner image

function Main() {
  return (
    <>
      <Bredcom
        title="Home"
        subtitle="Our Teacher"
        bannerImg={blogbg}
        description="Meet our dedicated educators who bring expertise, passion, and commitment to transforming lives through learning."
      />{" "}
      {/* Updated: Added banner image and description */}
      <First />
      {/* <Brand/> */}
      {/* <Expert /> */}
      <Redslider />
    </>
  );
}

export default Main;
