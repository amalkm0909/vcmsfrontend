import React from "react";
import { Link } from "react-router-dom";
import blogImg1 from "../../assets/img/blog/inner_b4.jpg";
import blogImg2 from "../../assets/img/blog/inner_b5.jpg";
import blogImg3 from "../../assets/img/blog/inner_b6.jpg";

function Blog() {
  return (
    <>
      <section
        id="blog"
        className="blog-area p-relative fix pt-120 pb-90"
        style={{
          backgroundImage: "url(assets/img/bg/blog_bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>
                  <i className="fal fa-graduation-cap" /> Our Blog
                </h5>
                <h2>Latest Blog </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="blog-thumb2">
                  <Link to="/blog-details">
                    <img src={blogImg1} alt="img" />
                  </Link>
                  <div className="date-home">
                    <i className="fal fa-calendar-alt" /> 10th January 2026
                  </div>
                </div>
                <div className="blog-content2">
                  <div className="b-meta">
                    <div className="meta-info">
                      <ul>
                        <li>
                          <i className="fal fa-user" /> By Admin{" "}
                        </li>
                        <li>
                          <i className="fal fa-comments" /> 3 Comments
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4>
                    <Link to="/blog-details">
                      Cras accumsan nulla nec lacus ultricies placerat.
                    </Link>
                  </h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="blog-btn">
                    <Link to="/blog-details">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 mb-30 hover-zoomin wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="blog-thumb2">
                  <Link to="/blog-details">
                    <img src={blogImg2} alt="img" />
                  </Link>
                  <div className="date-home">
                    <i className="fal fa-calendar-alt" /> 5th January 2026
                  </div>
                </div>
                <div className="blog-content2">
                  <div className="b-meta">
                    <div className="meta-info">
                      <ul>
                        <li>
                          <i className="fal fa-user" /> By Admin{" "}
                        </li>
                        <li>
                          <i className="fal fa-comments" /> 3 Comments
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4>
                    <Link to="/blog-details">
                      Dras accumsan nulla nec lacus ultricies placerat.
                    </Link>
                  </h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="blog-btn">
                    <Link to="/blog-details">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 mb-30 hover-zoomin wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="blog-thumb2">
                  <Link to="/blog-details">
                    <img src={blogImg3} alt="img" />
                  </Link>
                  <div className="date-home">
                    <i className="fal fa-calendar-alt" /> 1st January 2026
                  </div>
                </div>
                <div className="blog-content2">
                  <div className="b-meta">
                    <div className="meta-info">
                      <ul>
                        <li>
                          <i className="fal fa-user" /> By Admin{" "}
                        </li>
                        <li>
                          <i className="fal fa-comments" /> 3 Comments
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4>
                    <Link to="/blog-details">
                      Seas accumsan nulla nec lacus ultricies placerat.
                    </Link>
                  </h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="blog-btn">
                    <Link to="/blog-details">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
