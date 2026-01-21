import React, { useState } from "react";

function First() {
  // Add fade-in animation styles
  const animationStyles = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes shimmer {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }
    
    .gallery-shimmer {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shimmer 2s infinite;
      pointer-events: none;
      z-index: 1;
    }
  `;
  const Data = [
    // {
    //   img: "assets/img/gallery/protfolio-img01.jpg",
    //   category: "Campus Life",
    //   title: "Campus Facilities",
    //   type: "image",
    // },

    {
      category: "Student Events",
      title: "Event Highlights",
      details: "Memorable moments from our events",
      videoId: "xaJnc2g9gPQ",
      type: "video",
    },
    // {
    //   img: "assets/img/gallery/protfolio-img03.jpg",
    //   category: "Academics",
    //   title: "Classroom Learning",
    //   type: "image",
    // },
    // {
    //   img: "assets/img/gallery/protfolio-img04.jpg",
    //   category: "Placements",
    //   title: "Success Stories",
    //   type: "image",
    // },
    // {
    //   img: "assets/img/gallery/protfolio-img05.jpg",
    //   category: "Campus Life",
    //   title: "Campus Experience",
    //   type: "image",
    // },
    // {
    //   img: "assets/img/gallery/protfolio-img06.jpg",
    //   category: "Campus Life",
    //   title: "Campus Infrastructure",
    //   type: "image",
    // },
    {
      category: "Campus Life",
      title: "Campus Life Highlights",
      details: "Experience our vibrant campus community",
      videoId: "WXhj5oyj-BU",
      type: "video",
    },
    {
      category: "Campus Life",
      title: "campus life",
      details: "Explore our beautiful campus",
      videoId: "zciNPEHV4nk",
      type: "video",
    },
    {
      category: "Campus Life",
      title: "campus life",
      details: "Explore our beautiful campus",
      videoId: "tw2Q0p1AzPo",
      type: "video",
    },
    {
      category: "Campus Life",
      title: "campus life",
      details: "Explore our beautiful campus",
      videoId: "2BgCeIEmE3k",
      type: "video",
    },
    {
      img: "assets/img/gallery/protfolio-img07.jpg",
      category: "Placements",
      title: "MASOUDH M P",
      details: "Insurance Coordinator",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img08.jpg",
      category: "Placements",
      title: "NAVEEN JOSEPH JOJI",
      details: "Warehouse Supervisor",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img09.jpg",
      category: "Placements",
      title: "ASIYA BEEVI",
      details: "Guest Relation Executive",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img10.jpg",
      category: "Placements",
      title: "JOVEEN JOHN",
      details: "Warehouse Supervisor",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img11.jpg",
      category: "Placements",
      title: "SAJJAD V T",
      details: "Inventory Supervisor",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img12.jpg",
      category: "Placements",
      title: "NAZEEL N",
      details: "Warehouse Supervisor",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img13.jpg",
      category: "Placements",
      title: "ALAN KUNJUMON",
      details: "NDT Supervisor",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img14.jpg",
      category: "Placements",
      title: "MEGHA AJI",
      details: "Patient Relation Officer",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img15.jpg",
      category: "Placements",
      title: "FASIL T S",
      details: "Container Clearance Supervisor",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img16.jpg",
      category: "Placements",
      title: "FEMINA",
      details: "Public Relation Executive",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img17.jpg",
      category: "Placements",
      title: "NITHEESHA VINCENT",
      details: "Insurance Department",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img18.jpg",
      category: "Placements",
      title: "ATHULYA",
      details: "HR Executive",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img19.jpg",
      category: "Placements",
      title: "PRETTY MATHEW",
      details: "Finance Department",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img20.jpg",
      category: "Placements",
      title: "NAJEEM E N",
      details: "Transportation Coordinator",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img21.jpg",
      category: "Placements",
      title: "PREETHI",
      details: "Patient Care Coordinator",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img22.jpg",
      category: "Placements",
      title: "PARVATHY P",
      details: "Finance Department",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img23.jpg",
      category: "Placements",
      title: "ALFIYA P I",
      details: "Junior Accountant",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img24.jpg",
      category: "Placements",
      title: "SAJNA",
      details: "Business Administrator",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img25.jpg",
      category: "Placements",
      title: "JOSEPH FRANCIS",
      details: "Hull Supervisor",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img26.jpg",
      category: "Placements",
      title: "ARAVIND AV",
      details: "Piping Supervisor",
      type: "image",
    },
    {
      category: "Placements",
      title: "Success Stories",
      details: "Watch our placements in action",
      videoId: "1CyUTyQari8",
      type: "video",
    },
    {
      category: "Placements",
      title: "Student Testimonials",
      details: "Hear from our successful graduates",
      videoId: "vVYnhXNrxjk",
      type: "video",
    },
  ];

  const [current, setcurrent] = useState(Data);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const Filter = (category) => {
    const arr = [];
    if (category === "View All") {
      setcurrent(Data);
    } else {
      Data.forEach((item) => {
        if (item.category === category) {
          arr.push(item);
        }
      });
      setcurrent(arr);
    }
  };

  return (
    <>
      <style>{animationStyles}</style>
      <section
        id="work"
        className="pt-120 pb-120"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
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
                  <i className="fas fa-images" style={{ marginRight: "8px" }} />{" "}
                  Our Gallery
                </h5>
                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#0f3a5b",
                    marginBottom: "20px",
                  }}
                >
                  VCMS Campus & Events
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
                  Explore our vibrant campus life, student activities, academic
                  programs, and placement success stories
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-50">
            <div className="col-lg-12">
              <div
                className="text-center mb-50 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div
                  className="button-group filter-button-group"
                  style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    className="active"
                    data-filter="*"
                    onClick={() => Filter("View All")}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: "#4899d2",
                      color: "#fff",
                      border: "2px solid #4899d2",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#4899d2";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                    }}
                  >
                    View All
                  </button>
                  <button
                    data-filter=".campus"
                    onClick={() => Filter("Campus Life")}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: "#fff",
                      color: "#4899d2",
                      border: "2px solid #4899d2",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#4899d2";
                    }}
                  >
                    Campus Life
                  </button>
                  <button
                    data-filter=".events"
                    onClick={() => Filter("Student Events")}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: "#fff",
                      color: "#4899d2",
                      border: "2px solid #4899d2",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#4899d2";
                    }}
                  >
                    Student Events
                  </button>
                  <button
                    data-filter=".academics"
                    onClick={() => Filter("Academics")}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: "#fff",
                      color: "#4899d2",
                      border: "2px solid #4899d2",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#4899d2";
                    }}
                  >
                    Academics
                  </button>
                  <button
                    data-filter=".placement"
                    onClick={() => Filter("Placements")}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: "#fff",
                      color: "#4899d2",
                      border: "2px solid #4899d2",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#4899d2";
                    }}
                  >
                    Placements
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio">
            <div
              className="grid col3 row wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "30px",
                padding: "20px",
              }}
            >
              {current.map((item, Index) => (
                <div
                  key={Index}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    animation: `fadeIn 0.6s ease-out ${Index * 0.1}s both`,
                  }}
                  onMouseEnter={(e) => {
                    setHoveredIndex(Index);
                  }}
                  onMouseLeave={(e) => {
                    setHoveredIndex(null);
                  }}
                >
                  <div style={{ textDecoration: "none", display: "block" }}>
                    <figure
                      className="gallery-image"
                      style={{
                        margin: "0",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {item.type === "video" ? (
                        <div
                          style={{
                            width: "100%",
                            height: "300px",
                            backgroundColor: "#000",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <iframe
                            width="100%"
                            height="300"
                            src={`https://www.youtube.com/embed/${item.videoId}`}
                            title={item.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: "12px" }}
                          ></iframe>
                        </div>
                      ) : (
                        <img
                          src={item.img}
                          alt={item.title}
                          className="img"
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            transition: "transform 0.4s ease",
                            cursor: "pointer",
                            borderRadius: "16px",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                          }}
                        />
                      )}
                      {hoveredIndex === Index && (
                        <div className="gallery-shimmer"></div>
                      )}
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          backgroundColor: "transparent",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          opacity: hoveredIndex === Index ? "1" : "0",
                          transition: "opacity 0.3s ease",
                          gap: "8px",
                          padding: "30px",
                          textAlign: "center",
                        }}
                      >
                        <h4
                          style={{
                            color: "#ffffff",
                            margin: "0",
                            fontSize: "24px",
                            fontWeight: "800",
                            letterSpacing: "0.5px",
                            lineHeight: "1.3",
                            textShadow:
                              "0 2px 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {item.title}
                        </h4>
                        {item.details && (
                          <p
                            style={{
                              color: "#ffffff",
                              fontSize: "18px",
                              fontWeight: "700",
                              margin: "8px 0",
                              letterSpacing: "0.3px",
                              textShadow:
                                "0 2px 8px rgba(0, 61, 122, 0.9), 0 2px 4px rgba(0, 0, 0, 0.7)",
                            }}
                          >
                            {item.details}
                          </p>
                        )}
                        <span
                          style={{
                            color: "#ffffff",
                            fontSize: "14px",
                            fontWeight: "600",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            textShadow: "0 2px 6px rgba(0, 0, 0, 0.8)",
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
