import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import Brand from "./Brand";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const navClass = ({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`;

  return (
    <header
      className={`site-header ${
        scrolled ? "scrolled" : ""
      } ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="container navbar">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Brand />
        </motion.div>

        <nav
          id="main-navigation"
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            className={navClass}
            end
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                <span>Home</span>

                {isActive && (
                  <motion.span
                    className="nav-active-indicator"
                    layoutId="nav-active-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 30,
                    }}
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/services"
            className={navClass}
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                <span>Services</span>

                {isActive && (
                  <motion.span
                    className="nav-active-indicator"
                    layoutId="nav-active-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 30,
                    }}
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/solutions"
            className={navClass}
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                <span>Solutions</span>

                {isActive && (
                  <motion.span
                    className="nav-active-indicator"
                    layoutId="nav-active-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 30,
                    }}
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={navClass}
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                <span>About</span>

                {isActive && (
                  <motion.span
                    className="nav-active-indicator"
                    layoutId="nav-active-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 30,
                    }}
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={navClass}
            onClick={closeMenu}
          >
            {({ isActive }) => (
              <>
                <span>Contact</span>

                {isActive && (
                  <motion.span
                    className="nav-active-indicator"
                    layoutId="nav-active-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 30,
                    }}
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            <span>Request a Service</span>

            <motion.span
              className="nav-cta-icon"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </NavLink>
        </nav>

        <button
          type="button"
          className={`mobile-menu ${
            menuOpen ? "active" : ""
          }`}
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
}

export default Navbar;