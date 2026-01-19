import React from "react";
import { Link } from "react-router-dom";

function Main({ subtitle, title, bannerImg }) {
  return (
    <>
      <section
        className="breadcrumb-area d-flex p-relative align-items-center"
        style={{
          backgroundImage: `url(${bannerImg ? bannerImg : require("../../assets/img/bg/course_bg.jpg")})`,
          backgroundSize: subtitle === "Blog" ? undefined : "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animation: "fadeIn 0.8s ease-in",
          position: "relative",
          minHeight: subtitle === "Blog" ? undefined : "600px",
          height: subtitle === "Blog" ? undefined : "auto",
          paddingTop: subtitle === "Blog" ? undefined : 0,
          paddingBottom: subtitle === "Blog" ? undefined : 0,
          backgroundColor: "transparent",
        }}
      >
        {/* Gradient overlay removed for blog banner */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div
                className={
                  subtitle === "Blog"
                    ? "breadcrumb-wrap text-center"
                    : "breadcrumb-wrap text-left"
                }
                style={{
                  animation: "slideInLeft 0.6s ease-out",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div
                  className="breadcrumb-title"
                  style={
                    subtitle === "Blog"
                      ? {
                          fontFamily: "'Jost', sans-serif",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }
                      : {}
                  }
                >
                  {subtitle === "Blog" ? (
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "24px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                        padding: "32px 40px 24px 40px",
                        maxWidth: 480,
                        margin: "40px 0 0 auto",
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        right: "5vw",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 40,
                          color: "#ff6b35",
                          marginBottom: 10,
                          display: "inline-block",
                          fontWeight: 700,
                        }}
                      >
                        <i
                          className="fas fa-blog"
                          style={{ marginRight: 12 }}
                        ></i>
                        Blog
                      </span>
                      <p
                        style={{
                          marginTop: "10px",
                          fontSize: "18px",
                          color: "#222",
                          fontWeight: 500,
                          letterSpacing: 1,
                          marginBottom: 0,
                        }}
                      >
                        "Discover stories, news, and insights from VCMS. Dive
                        into our latest articles and updates."
                      </p>
                    </div>
                  ) : (
                    <div
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        borderRadius: "18px",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                        padding: "32px 36px 24px 36px",
                        maxWidth: 520,
                        margin: "40px 40px 0 auto",
                        position: "relative",
                        zIndex: 2,
                        textAlign: "left",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: 38,
                          fontWeight: 800,
                          color: "#2b2e83",
                          marginBottom: 12,
                          letterSpacing: 1,
                        }}
                      >
                        {subtitle}
                      </h2>
                      <p
                        style={{
                          fontSize: 18,
                          color: "#333",
                          fontWeight: 500,
                          marginBottom: 0,
                        }}
                      >
                        {subtitle === "Courses"
                          ? "Explore our diverse range of professional programs and certifications designed to empower your career."
                          : "Learn more about our journey and mission"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {subtitle !== "Blog" && (
              <div
                className="breadcrumb-wrap2"
                style={{ animation: "slideInUp 0.7s ease-out" }}
              >
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/"> {title} </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {subtitle}
                    </li>
                  </ol>
                </nav>
              </div>
            )}
          </div>
        </div>

        <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
      </section>
    </>
  );
}

export default Main;
