import React from "react";
import { useParams } from "react-router-dom";
import Bredcom from "../Bredcom/Main";
import First from "../mencoursedetails/First";
import Brand from "../menhomethree/Brand";
import Redslider from "../menhome/Redslider";

function Main() {
  const { courseId } = useParams();
  const actualCourseId = courseId ? parseInt(courseId) : 1;

  return (
    <>
      <Bredcom title="Home" subtitle="Course Details" />
      {/* <Redslider /> */}
      <First key={actualCourseId} courseId={actualCourseId} />
      {/* <Brand /> */}
      <Redslider />
    </>
  );
}

export default Main;
