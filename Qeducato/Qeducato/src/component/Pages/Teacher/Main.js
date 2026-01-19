import React from "react";
import Bredcom from "../../Bredcom/Main";
import Brand from "../../menhomethree/Brand";
import Redslider from "../../menhome/Redslider";
import First from "../menteacher/First";
import Expert from "../../menhomethree/Expert";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Our Teacher" />
      <First />
      {/* <Brand/> */}

      {/* <Expert /> */}
      <Redslider />
    </>
  );
}

export default Main;
