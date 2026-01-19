import React from "react";

function Form() {
  return (
    <>
      <section
        id="contact"
        className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix"
        style={{ background: "#eaf4fc" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 d-flex align-items-center justify-content-center">
              <div
                className="contact-bg w-100"
                style={{
                  maxWidth: "800px",
                  background: "#fff",
                  borderRadius: "18px",
                  boxShadow: "0 8px 32px 0 rgba(60, 120, 216, 0.18)",
                  border: "2px solid #4899d2",
                  padding: "24px 20px 20px 20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div className="section-title center-align text-center mb-40">
                  <h2
                    style={{
                      color: "#2563eb",
                      fontWeight: 700,
                      letterSpacing: "1px",
                    }}
                  >
                    Enquire Now
                  </h2>
                  <p style={{ color: "#555", fontSize: "1.1rem" }}>
                    Fill out the form below and our team will get in touch with
                    you soon.
                  </p>
                </div>
                <form
                  action="#"
                  method="post"
                  className="contact-form mt-30 text-center"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-30">
                        <input
                          type="text"
                          id="firstn"
                          name="firstn"
                          placeholder="First Name"
                          required
                          style={{
                            background: "#f0f6fb",
                            border: "1.5px solid #4899d2",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            padding: "12px 16px",
                          }}
                        />
                        <i className="icon fal fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-30">
                        <input
                          type="text"
                          id="lastn"
                          name="lastn"
                          placeholder="Last Name"
                          required
                          style={{
                            background: "#f0f6fb",
                            border: "1.5px solid #4899d2",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            padding: "12px 16px",
                          }}
                        />
                        <i className="icon fal fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-email mb-30">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                          style={{
                            background: "#f0f6fb",
                            border: "1.5px solid #4899d2",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            padding: "12px 16px",
                          }}
                        />
                        <i className="icon fal fa-envelope" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-30">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone No."
                          required
                          style={{
                            background: "#f0f6fb",
                            border: "1.5px solid #4899d2",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            padding: "12px 16px",
                          }}
                        />
                        <i className="icon fal fa-phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-subject mb-30">
                        <select
                          id="course"
                          name="course"
                          className="form-control"
                          required
                          style={{
                            background: "#f0f6fb",
                            border: "1.5px solid #4899d2",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            padding: "12px 16px",
                          }}
                        >
                          <option value="">Interested Course</option>
                          <option value="Logistics & Shipping Management">
                            Logistics & Shipping Management
                          </option>
                          <option value="Automotive Technology">
                            Automotive Technology
                          </option>
                          <option value="HR & Office Administration">
                            HR & Office Administration
                          </option>
                          <option value="Hospital Administration">
                            Hospital Administration
                          </option>
                          <option value="Global Business Management">
                            Global Business Management
                          </option>
                        </select>
                        <i className="icon fal fa-book" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={4}
                          placeholder="Write your message here"
                          style={{
                            background: "#f0f6fb",
                            border: "1.5px solid #4899d2",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            padding: "12px 16px",
                          }}
                        />
                        <i className="icon fal fa-edit" />
                      </div>
                      <div className="slider-btn text-center mt-3">
                        <button
                          className="btn ss-btn"
                          type="submit"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                          style={{
                            background: "#2563eb",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "1.1rem",
                            borderRadius: "30px",
                            padding: "12px 40px",
                            boxShadow: "0 4px 16px 0 rgba(60, 120, 216, 0.12)",
                          }}
                        >
                          Submit Enquiry{" "}
                          <i className="fal fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
