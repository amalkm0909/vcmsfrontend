import React from "react";
import Bredcom from "../Bredcom/Main";
import First from "../menblog/First";

import blogbg from "../../assets/img/blog/blog_bg.jpg";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Blog" bannerImg={blogbg} />
      <First />
    </>
  );
}

export default Main;
