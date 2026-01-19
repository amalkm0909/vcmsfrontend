import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Background from "../../assets/img/slider/slider_bg.png";
import Backgroundtwo from "../../assets/img/slider/slider_bg_01.png";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-next ${className}`}
      onClick={onClick}
    >
      <i className="far fa-angle-right"></i>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-prev ${className}`}
      onClick={onClick}
    >
      <i className="far fa-angle-left"></i>
    </button>
  );
}

function Sliderone() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { arrows: false },
      },
    ],
  };

  return (
    <>
      {/* ================= SLIDER SECTION ================= */}
      <section id="home" className="slider-area fix p-relative">
        <Slider className="slider-active" {...settings}>
          {/* Slide 1 */}
          <div>
            <div
              className="single-slider slider-bg"
              style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="slider-content mt-130 slider-card-highlight">
                      <h5>welcome To VCMS</h5>
                      <h2>Ship Building And Repair Management</h2>
                      <p>
                        At Viswam College of Management Studies, we believe in
                        the power of education to transform lives and careers.
                      </p>
                      <div className="slider-btn mt-30">
                        <Link to="/about" className="btn ss-btn mr-15">
                          Explore Courses{" "}
                          <i className="fal fa-long-arrow-right" />
                        </Link>
                        <Link
                          to="/contact"
                          className="btn ss-btn active contact-highlight"
                        >
                          Apply Now <i className="fal fa-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div
              className="single-slider slider-bg"
              style={{
                backgroundImage: `url(${Backgroundtwo})`,
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="slider-content mt-130 slider-card-highlight">
                      <h5>welcome To VCMS</h5>
                      <h2>HR And Office Administration</h2>
                      <p>
                        Develop essential HR and office management skills for
                        modern workplaces.
                      </p>
                      <div className="slider-btn mt-30">
                        <Link to="/about" className="btn ss-btn mr-15">
                          View Program <i className="fal fa-long-arrow-right" />
                        </Link>
                        <Link
                          to="/contact"
                          className="btn ss-btn active contact-highlight"
                        >
                          Apply Now <i className="fal fa-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div
              className="single-slider slider-bg"
              style={{
                backgroundImage: `url(${Backgroundtwo})`,
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="slider-content mt-130 slider-card-highlight">
                      <h5>welcome To VCMS</h5>
                      <h2>Logistics and Shipping Management</h2>
                      <p>
                        Master logistics, supply chain, and global shipping
                        operations.
                      </p>
                      <div className="slider-btn mt-30">
                        <Link to="/about" className="btn ss-btn mr-15">
                          View Program <i className="fal fa-long-arrow-right" />
                        </Link>
                        <Link
                          to="/contact"
                          className="btn ss-btn active contact-highlight"
                        >
                          Apply Now <i className="fal fa-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div>
            <div
              className="single-slider slider-bg"
              style={{
                backgroundImage: `url(${Backgroundtwo})`,
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="slider-content mt-130 slider-card-highlight">
                      <h5>welcome To VCMS</h5>
                      <h2>Hospital Administration & Accounting</h2>
                      <p>
                        Learn healthcare administration, hospital operations,
                        and medical accounting.
                      </p>
                      <div className="slider-btn mt-30">
                        <Link to="/about" className="btn ss-btn mr-15">
                          View Program <i className="fal fa-long-arrow-right" />
                        </Link>
                        <Link
                          to="/contact"
                          className="btn ss-btn active contact-highlight"
                        >
                          Apply Now <i className="fal fa-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div>
            <div
              className="single-slider slider-bg"
              style={{
                backgroundImage: `url(${Backgroundtwo})`,
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="slider-content mt-130 slider-card-highlight">
                      <h5>welcome To VCMS</h5>
                      <h2>Advanced Automotive Technology</h2>
                      <p>
                        Hands-on training in vehicle diagnostics, EV systems,
                        and modern automotive technology.
                      </p>
                      <div className="slider-btn mt-30">
                        <Link to="/about" className="btn ss-btn mr-15">
                          View Program <i className="fal fa-long-arrow-right" />
                        </Link>
                        <Link
                          to="/contact"
                          className="btn ss-btn active contact-highlight"
                        >
                          Apply Now <i className="fal fa-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default Sliderone;
