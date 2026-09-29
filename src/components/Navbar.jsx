import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import Brand from "./Brand";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    isActive ? "active" : undefined;

  return (
    <header className="site-header">
      <div className="container navbar">

        {/* Brand */}
        <Brand />

        {/* Navigation */}
        <nav
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
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

          <NavLink
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Request a Service
            <ArrowRight size={16} />
          </NavLink>

        </nav>

        {/* Mobile menu */}
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
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