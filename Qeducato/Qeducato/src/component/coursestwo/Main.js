import React from "react";
import Bredcom from "../Bredcom/Main";
import First from "../mencoursestwo/First";
import Brand from "../menhomethree/Brand";
import Redslider from "../menhome/Redslider";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Courses Two" />
      <Redslider />
      <First />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
