
"use client";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        {/* LOGO */}
       <a className="navbar-brand" href="#home">
  <img
    src="/images/logo.png"
    alt="Designify Logo"
    style={{
      height: "45px",
      width: "auto",
      objectFit: "contain"
    }}
  />
</a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active px-3" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="#portfolio">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="#contact">
                Contact
              </a>
            </li>

          </ul>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="btn btn-primary rounded-pill px-4"
          >
            Let's Talk →
          </a>

        </div>
      </div>
    </nav>
  );
}

