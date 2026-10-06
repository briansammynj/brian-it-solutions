import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import Brand from "./Brand";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const navClass = ({ isActive }) =>
    isActive ? "active" : undefined;

  return (
    <header className="site-header">
      <div className="container navbar">

        {/* =================================================
            BRAND
        ================================================= */}

        <Brand />


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >

          <NavLink
            to="/"
            className={navClass}
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={navClass}
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/solutions"
            className={navClass}
            onClick={closeMenu}
          >
            Solutions
          </NavLink>

          <NavLink
            to="/about"
            className={navClass}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={navClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>


          {/* Primary CTA */}

          <NavLink
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            <span>Request a Service</span>

            <ArrowRight size={16} />
          </NavLink>

        </nav>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className="mobile-menu"
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;