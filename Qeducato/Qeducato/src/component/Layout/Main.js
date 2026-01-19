import React from "react";
import HeaderOne from "../headerone/Main";
import HeaderTwo from "../headertwo/Main";
import HeaderThree from "../headerthree/Main";
import Footer from "../footer/Main";

function Layout({ children, headerType = "one" }) {
  const getHeader = () => {
    switch (headerType) {
      case "two":
        return <HeaderTwo />;
      case "three":
        return <HeaderThree />;
      case "one":
      default:
        return <HeaderOne />;
    }
  };

  return (
    <>
      {getHeader()}
      {children}
      <Footer />
    </>
  );
}

export default Layout;
