import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import Brand from "./Brand";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-main">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">

            <Brand footer />

            <p>
              Practical technology solutions for businesses —
              from IT support and POS systems to networking,
              business systems, integrations and custom software.
            </p>

            <Link
              to="/contact"
              className="footer-service-link"
            >
              Request a Service
              <ArrowUpRight size={15} />
            </Link>

          </div>


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="footer-column">

            <h3>Navigation</h3>

            <Link to="/">
              Home
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/solutions">
              Solutions
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="footer-column">

            <h3>Services</h3>

            <Link to="/services">
              IT Support
            </Link>

            <Link to="/services">
              POS Systems
            </Link>

            <Link to="/services">
              Networking
            </Link>

            <Link to="/services">
              Business Systems
            </Link>

            <Link to="/services">
              Custom Software
            </Link>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="footer-column footer-contact">

            <h3>Get in Touch</h3>

            {/* Email */}

            <a href="mailto:brianmumoit@gmail.com">
              <Mail size={15} />

              <span>
                brianmumoit@gmail.com
              </span>
            </a>


            {/* Phone */}

            <a href="tel:+254711437854">
              <Phone size={15} />

              <span>
                +254 711 437 854
              </span>
            </a>


            {/* WhatsApp */}

            <a
              href="https://wa.me/254711437854"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} />

              <span>
                Chat on WhatsApp
              </span>
            </a>

          </div>

        </div>


        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer-bottom">

          <p>
            © {currentYear} Brian Mumo IT Solutions.
            All rights reserved.
          </p>

          <p>
            IT Solutions • Systems • Support
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;