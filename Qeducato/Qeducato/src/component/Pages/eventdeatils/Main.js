import React from "react";
import Bredcom from "../../Bredcom/Main";
import Brand from "../../menhomethree/Brand";
import Redslider from "../../menhome/Redslider";
import First from "../meneventdeatils/First";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Event Details" />
      <First />
      <Redslider />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
