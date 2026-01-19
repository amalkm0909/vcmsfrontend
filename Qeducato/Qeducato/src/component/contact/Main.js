import React from "react";
import Bredcom from "../Bredcom/Main";
import Brand from "../menhomethree/Brand";
import Redslider from "../menhome/Redslider";
import Touch from "../mencontact/Touch";
import Map from "../mencontact/Map";
import Form from "../mencontact/Form";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Contact Us" />
      
      <Touch />
      <Map />
      <Form />
      <Redslider />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
