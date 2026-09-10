
"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    setSubmitted(true);
    form.reset();
    form.classList.remove("was-validated");
  }

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="badge rounded-pill bg-primary px-3 py-2 mb-3">
            GET IN TOUCH
          </span>

          <h2 className="display-5 fw-bold">
            Let's Work Together
          </h2>

          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Have a project in mind? Send us a message and
            let's create something amazing together.
          </p>

        </div>

        <div className="row g-5 align-items-start">

          {/* Contact Information */}
          <div className="col-lg-5">

            <h3 className="fw-bold mb-4">
              Let's talk
            </h3>

            <p className="text-secondary mb-4">
              We would love to hear about your project, idea,
              or business requirement.
            </p>

            {/* Email */}
            <div className="contact-box rounded-4 p-4 mb-3">
              <div className="d-flex align-items-center gap-3">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(139, 92, 246, 0.15)",
                  }}
                >
                  📧
                </div>

                <div>
                  <small className="text-secondary">
                    Email
                  </small>

                  <h6 className="fw-bold mb-0">
                    hello@designify.com
                  </h6>
                </div>

              </div>
            </div>

            {/* Phone */}
            <div className="contact-box rounded-4 p-4 mb-3">
              <div className="d-flex align-items-center gap-3">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(139, 92, 246, 0.15)",
                  }}
                >
                  📞
                </div>

                <div>
                  <small className="text-secondary">
                    Phone
                  </small>

                  <h6 className="fw-bold mb-0">
                    +91 98765 43210
                  </h6>
                </div>

              </div>
            </div>

            {/* Location */}
            <div className="contact-box rounded-4 p-4">
              <div className="d-flex align-items-center gap-3">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(139, 92, 246, 0.15)",
                  }}
                >
                  📍
                </div>

                <div>
                  <small className="text-secondary">
                    Location
                  </small>

                  <h6 className="fw-bold mb-0">
                    Chennai, India
                  </h6>
                </div>

              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="col-lg-7">

            <div className="contact-box rounded-4 p-4 p-md-5">

              {submitted ? (
                <div className="text-center py-5">

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: "rgba(139, 92, 246, 0.15)",
                      fontSize: "32px",
                    }}
                  >
                    ✓
                  </div>

                  <h3 className="fw-bold">
                    Message Sent!
                  </h3>

                  <p className="text-secondary">
                    Thank you for contacting us.
                    We will get back to you soon.
                  </p>

                  <button
                    className="btn btn-dark rounded-pill px-4"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>

                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                >

                  {/* Name */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Your Name
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Enter your name"
                      required
                    />

                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Enter your email"
                      required
                    />

                    <div className="invalid-feedback">
                      Please enter a valid email.
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Subject
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Project subject"
                      required
                    />

                    <div className="invalid-feedback">
                      Please enter a subject.
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Message
                    </label>

                    <textarea
                      className="form-control rounded-3"
                      rows="5"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>

                    <div className="invalid-feedback">
                      Please enter your message.
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg rounded-pill px-5"
                  >
                    Send Message →
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

