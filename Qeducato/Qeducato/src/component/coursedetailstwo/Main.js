import React from "react";
import { useParams } from "react-router-dom";
import Bredcom from "../Bredcom/Main";
import Brand from "../menhomethree/Brand";
import First from "../mencoursedetailstwo/First";
import Redslider from "../menhome/Redslider";

function Main() {
  const { courseId } = useParams();
  const actualCourseId = courseId ? parseInt(courseId) : 2;

  return (
    <>
      <Bredcom title="Home" subtitle="Course Details" />
      <Redslider />
      <First courseId={actualCourseId} />
      <Brand />
    </>
  );
}

export default Main;
