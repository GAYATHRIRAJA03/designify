"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-dark bg-dark sticky-top shadow">
      <div className="container">

        {/* LOGO */}
        <a
          className="navbar-brand"
          href="#home"
          onClick={closeMenu}
        >
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
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MENU */}
        <div className={`navigation-menu ${menuOpen ? "menu-open" : ""}`}>

          <ul className="navbar-nav">

            <li className="nav-item">
              <a
                className="nav-link active"
                href="#home"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                onClick={closeMenu}
              >
                Services
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#portfolio"
                onClick={closeMenu}
              >
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>

          </ul>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="btn btn-primary rounded-pill px-4 talk-btn"
            onClick={closeMenu}
          >
            Let's Talk →
          </a>

        </div>
      </div>

      {/* NAVBAR CSS */}
      <style jsx>{`

        .navigation-menu {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
        }

        .navigation-menu .navbar-nav {
          display: flex;
          flex-direction: row;
          margin: 0 auto;
        }

        .nav-link {
          color: white !important;
          padding: 8px 14px !important;
          margin: 0 5px;
          transition: 0.3s;
        }

        .nav-link:hover {
          color: #8b5cf6 !important;
        }

        .nav-link.active {
          color: #8b5cf6 !important;
        }

        .talk-btn {
          transition: 0.3s;
        }

        .talk-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 92, 246, 0.35);
        }

        /* HAMBURGER */
        .mobile-menu-button {
          display: none;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 8px;
          background: transparent;
          padding: 8px;
          cursor: pointer;
        }

        .mobile-menu-button span {
          display: block;
          height: 2px;
          width: 100%;
          background: white;
          margin: 5px 0;
        }

        /* MOBILE */
        @media (max-width: 991px) {

          .mobile-menu-button {
            display: block;
          }

          .navigation-menu {
            display: none;
            width: 100%;
            flex-direction: column;
            padding: 20px 0;
          }

          .navigation-menu.menu-open {
            display: flex;
          }

          .navigation-menu .navbar-nav {
            width: 100%;
            flex-direction: column;
            align-items: center;
            margin: 0;
          }

          .nav-link {
            width: 100%;
            text-align: center;
            padding: 12px !important;
          }

          .talk-btn {
            width: 100%;
            text-align: center;
            margin-top: 15px;
          }
        }

      `}</style>
    </nav>
  );
}