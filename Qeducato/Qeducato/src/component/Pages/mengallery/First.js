import React, { useState } from "react";
import { Link } from "react-router-dom";

function First() {
  const Data = [
    {
      img: "assets/img/gallery/protfolio-img01.jpg",
      category: "Campus Life",
      title: "Campus Facilities",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img02.jpg",
      category: "Student Events",
      title: "Student Engagement",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img03.jpg",
      category: "Academics",
      title: "Classroom Learning",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img04.jpg",
      category: "Placements",
      title: "Success Stories",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img06.jpg",
      category: "Campus Life",
      title: "Campus Infrastructure",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img01.jpg",
      category: "Student Events",
      title: "Cultural Programs",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img02.jpg",
      category: "Academics",
      title: "Training Sessions",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img03.jpg",
      category: "Placements",
      title: "Corporate Events",
      type: "image",
    },
    {
      img: "assets/img/gallery/protfolio-img04.jpg",
      category: "Campus Life",
      title: "Student Life",
      type: "image",
    },

    // INSTAGRAM IMAGES - Replace URLs with actual Instagram image URLs
    {
      img: "https://scontent.cdninstagram.com/v/PASTE_INSTAGRAM_IMAGE_URL_HERE_1.jpg",
      category: "Campus Life",
      title: "Instagram - Campus Life",
      type: "image",
    },
    {
      img: "https://scontent.cdninstagram.com/v/PASTE_INSTAGRAM_IMAGE_URL_HERE_2.jpg",
      category: "Student Events",
      title: "Instagram - Student Event",
      type: "image",
    },
    {
      img: "https://scontent.cdninstagram.com/v/PASTE_INSTAGRAM_IMAGE_URL_HERE_3.jpg",
      category: "Academics",
      title: "Instagram - Academic Activity",
      type: "image",
    },
    {
      img: "https://scontent.cdninstagram.com/v/https://www.instagram.com/vcms_cochin/reel/DTe27COkmfC/",
      category: "Placements",
      title: "Instagram - Placement Success",
      type: "image",
    },
    {
      img: "https://scontent.cdninstagram.com/v/PASTE_INSTAGRAM_IMAGE_URL_HERE_5.jpg",
      category: "Campus Life",
      title: "Instagram - Campus Moments",
      type: "image",
    },

    // YOUTUBE VIDEOS - Replace Video IDs with actual YouTube Video IDs
    {
      videoId: "PASTE_YOUTUBE_VIDEO_ID_HERE_1",
      category: "Student Events",
      title: "YouTube - Campus Tour",
      type: "video",
    },
    {
      videoId: "PASTE_YOUTUBE_VIDEO_ID_HERE_2",
      category: "Academics",
      title: "YouTube - Course Overview",
      type: "video",
    },
    {
      videoId: "PASTE_YOUTUBE_VIDEO_ID_HERE_3",
      category: "Placements",
      title: "YouTube - Student Success Story",
      type: "video",
    },
    {
      videoId: "PASTE_YOUTUBE_VIDEO_ID_HERE_4",
      category: "Campus Life",
      title: "YouTube - VCMS Life",
      type: "video",
    },
  ];

  const [current, setcurrent] = useState(Data);

  const Filter = (category) => {
    const arr = [];
    if (category === "View All") {
      setcurrent(Data);
    } else {
      Data.map((item) => {
        if (item.category === category) {
          arr.push(item);
        }
      });
      setcurrent(arr);
    }
  };

  return (
    <>
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
                gap: "25px",
              }}
            >
              {current.map((item, Index) => (
                <div
                  key={Index}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "12px",
                    boxShadow: "0 5px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <Link
                    to="/single-projects"
                    style={{ textDecoration: "none", display: "block" }}
                  >
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
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                          }}
                        />
                      )}
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          backgroundColor: "rgba(15, 58, 91, 0.85)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          opacity: "0",
                          transition: "opacity 0.3s ease",
                          gap: "10px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "1";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "0";
                        }}
                      >
                        <h4
                          style={{
                            color: "#fff",
                            margin: "0",
                            fontSize: "18px",
                            fontWeight: "700",
                          }}
                        >
                          {item.title}
                        </h4>
                        <span
                          style={{
                            color: "#003D7A",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                        >
                          {item.category}
                        </span>
                        {item.type === "video" ? (
                          <i
                            className="fas fa-play"
                            style={{
                              color: "#4899d2",
                              fontSize: "24px",
                              marginTop: "10px",
                            }}
                          ></i>
                        ) : (
                          <i
                            className="fas fa-search"
                            style={{
                              color: "#4899d2",
                              fontSize: "24px",
                              marginTop: "10px",
                            }}
                          ></i>
                        )}
                      </div>
                    </figure>
                  </Link>
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
