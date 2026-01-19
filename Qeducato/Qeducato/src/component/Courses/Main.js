import React from "react";
import Bredcom from "../Bredcom/Main";
import First from "../mencourses/First";
import Brand from "../menhomethree/Brand";
import Redslider from "../menhome/Redslider";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Our courses" />
      <First />
      <Redslider />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
