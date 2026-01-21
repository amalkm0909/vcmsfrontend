import React from "react";
import { Link } from "react-router-dom";

function Placements() {
  const recentPlacements = [
    {
      name: "MASOUDH M P",
      position: "Insurance Coordinator",
      img: "assets/img/gallery/protfolio-img07.jpg",
    },
    {
      name: "NAVEEN JOSEPH JOJI",
      position: "Warehouse Supervisor",
      img: "assets/img/gallery/protfolio-img08.jpg",
    },
    {
      name: "ASIYA BEEVI",
      position: "Guest Relation Executive",
      img: "assets/img/gallery/protfolio-img09.jpg",
    },
    {
      name: "JOVEEN JOHN",
      position: "Warehouse Supervisor",
      img: "assets/img/gallery/protfolio-img10.jpg",
    },
    {
      name: "ARYA V T",
      position: "Inventory Supervisor",
      img: "assets/img/gallery/protfolio-img11.jpg",
    },
    {
      name: "NAZI N",
      position: "Warehouse Supervisor",
      img: "assets/img/gallery/protfolio-img12.jpg",
    },
  ];

  return (
    <>
      <section className="pt-120 pb-120" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          {/* Section Title */}
          <div className="row mb-70">
            <div className="col-lg-12">
              <div
                className="text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5
                  style={{
                    color: "#4899d2",
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: "15px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  <i className="fas fa-star" style={{ marginRight: "8px" }} />
                  Success Stories
                </h5>
                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#0f3a5b",
                    marginBottom: "20px",
                  }}
                >
                  Recent Placements
                </h2>
                <div
                  style={{
                    width: "60px",
                    height: "4px",
                    backgroundColor: "#003D7A",
                    margin: "0 auto 25px",
                    borderRadius: "2px",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    maxWidth: "700px",
                    margin: "0 auto",
                    lineHeight: "1.8",
                  }}
                >
                  Meet our talented graduates who have successfully secured
                  positions across leading organizations and industries.
                </p>
              </div>
            </div>
          </div>

          {/* Placements Grid */}
          <div className="row">
            {recentPlacements.map((placement, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-30">
                <div
                  className="wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay={`.${(index + 1) * 2}s`}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 20px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "280px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={placement.img}
                      alt={placement.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "25px" }}>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#0f3a5b",
                        marginBottom: "8px",
                      }}
                    >
                      {placement.name}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#4899d2",
                        fontWeight: "600",
                        marginBottom: "0",
                      }}
                    >
                      {placement.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="row mt-50">
            <div className="col-lg-12">
              <div className="text-center">
                <Link
                  to="/placements"
                  className="btn"
                  style={{
                    backgroundColor: "#4899d2",
                    border: "none",
                    padding: "15px 45px",
                    fontSize: "16px",
                    fontWeight: "700",
                    borderRadius: "6px",
                    color: "#fff",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#0f3a5b";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 10px 25px rgba(15, 58, 91, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#4899d2";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  View All Placements{" "}
                  <i
                    className="fas fa-arrow-right"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Placements;
