
export default function Hero() {
  return (
    <section id="home" className="py-5">
      <div className="container">
        <div className="row align-items-center py-5">

          {/* LEFT SIDE */}
          <div className="col-lg-6 text-center text-lg-start">

            <span className="badge rounded-pill text-bg-dark px-3 py-2 mb-3">
              CREATIVE DESIGN AGENCY
            </span>

            <h1 className="display-3 fw-bold mb-4">
              We Build
              <br />
              <span className="text-primary">
                Digital Experiences
              </span>
            </h1>

            <p className="lead text-secondary mb-4">
              We create beautiful, modern and meaningful digital
              experiences that help businesses grow and stand out.
            </p>

            {/* BUTTONS */}
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
              <a
                href="#contact"
                className="btn btn-dark btn-lg rounded-pill px-4"
              >
                Start a Project →
              </a>

              <a
                href="#portfolio"
                className="btn btn-outline-dark btn-lg rounded-pill px-4"
              >
                View Our Work
              </a>
            </div>

            {/* STATS */}
            <div className="row mt-5">

              <div className="col-4">
                <h3 className="fw-bold mb-0">50+</h3>
                <small className="text-secondary">
                  Projects
                </small>
              </div>

              <div className="col-4">
                <h3 className="fw-bold mb-0">30+</h3>
                <small className="text-secondary">
                  Clients
                </small>
              </div>

              <div className="col-4">
                <h3 className="fw-bold mb-0">5+</h3>
                <small className="text-secondary">
                  Years
                </small>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 mt-5 mt-lg-0">

            <div className="position-relative">

              {/* MAIN HERO CARD */}
              <div
                className="bg-dark rounded-4 p-4 shadow-lg"
                style={{
                  minHeight: "500px",
                }}
              >

                {/* CARD HEADER */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="text-white fw-bold">
                    DESIGNIFY
                  </span>

                  <span className="badge bg-light text-dark">
                    CREATIVE
                  </span>
                </div>

                {/* HERO IMAGE */}
                <div className="text-center">

                  <img
                    src="/images/hero.jpeg"
                    alt="Creative Design Agency"
                    className="img-fluid rounded-4 shadow"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />

                </div>

                {/* CARD TEXT */}
                <div className="text-center mt-4">

                  <h2 className="text-white fw-bold mb-0">
                    Think.
                    <br />
                    Design.
                    <br />
                    Create.
                  </h2>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

