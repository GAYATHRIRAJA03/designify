
export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row g-4">

          {/* BRAND */}
          <div className="col-lg-4">
            <h3 className="fw-bold text-white mb-3">
              Designify<span className="text-primary">.</span>
            </h3>

            <p className="text-secondary">
              We create beautiful, modern and meaningful digital
              experiences that help businesses grow and stand out.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a href="#" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">Facebook</a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-3">
              Quick Links
            </h6>

            <div className="d-flex flex-column gap-2">
              <a href="#home" className="footer-link">Home</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#portfolio" className="footer-link">Portfolio</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="col-6 col-lg-3">
            <h6 className="text-white fw-bold mb-3">
              Services
            </h6>

            <div className="d-flex flex-column gap-2">
              <span className="footer-link">UI/UX Design</span>
              <span className="footer-link">Web Development</span>
              <span className="footer-link">Mobile Design</span>
              <span className="footer-link">Digital Strategy</span>
            </div>
          </div>

          {/* CONTACT */}
          <div className="col-lg-3">
            <h6 className="text-white fw-bold mb-3">
              Contact
            </h6>

            <p className="footer-link mb-2">
              📧 hello@designify.com
            </p>

            <p className="footer-link mb-2">
              📞 +91 98765 43210
            </p>

            <p className="footer-link mb-0">
              📍 Chennai, India
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="text-secondary mb-0">
            © 2026 Designify. All Rights Reserved.
          </p>

          <a href="#home" className="footer-link">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

