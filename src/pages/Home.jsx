import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Network,
  Package,
  Server,
  Settings,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Server,
    title: "POS Systems",
    text: "Installation, configuration, troubleshooting and support for business POS environments.",
  },
  {
    icon: Headphones,
    title: "IT Support",
    text: "Practical technical support that helps businesses keep their systems running.",
  },
  {
    icon: Network,
    title: "Networking",
    text: "Network, Wi-Fi and connectivity solutions for reliable business operations.",
  },
  {
    icon: Package,
    title: "Business Systems",
    text: "Inventory and operational systems designed around how your business works.",
  },
  {
    icon: Settings,
    title: "IT Helpdesk",
    text: "Centralized ticketing systems for managing IT issues and support workflows.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    text: "Purpose-built software and integrations for specific business requirements.",
  },
];

const strengths = [
  "Business-focused IT solutions",
  "Practical implementation",
  "Ongoing technical support",
  "Systems and process improvement",
];

function Home() {
  return (
    <>
      <Helmet>
        <title>Brian Mumo | IT Solutions • Systems • Support</title>

        <link
          rel="canonical"
          href="https://brian-it-solutions.vercel.app/"
        />

        <meta
          name="description"
          content="Brian Mumo provides practical IT solutions, IT support, POS systems, networking, business systems, IT helpdesk platforms, system integration and custom software."
        />

        <meta
          name="keywords"
          content="IT support Kenya, IT solutions Kenya, POS systems Kenya, networking Kenya, IT helpdesk, system integration, custom software, Brian Mumo"
        />

        <meta
          property="og:title"
          content="Brian Mumo | IT Solutions • Systems • Support"
        />

        <meta
          property="og:description"
          content="Practical IT solutions for businesses — IT support, POS systems, networking, business systems, helpdesk platforms, integrations and custom software."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">
        <div className="container">
          <div className="hero-grid">

            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">
                IT SOLUTIONS • SYSTEMS • SUPPORT
              </span>

              <h1>
                Technology solutions
                <span> built around your business.</span>
              </h1>

              <p>
                I help businesses implement, support and improve the
                technology they depend on — from POS and inventory
                systems to IT helpdesk platforms, networking and
                custom business software.
              </p>

              <div className="hero-actions">
                <Link
                  to="/contact"
                  className="btn btn-primary"
                >
                  Request IT Service
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/solutions"
                  className="btn btn-secondary"
                >
                  Explore Solutions
                </Link>
              </div>

              <div className="hero-trust">
                <div>
                  <CheckCircle2 size={17} />
                  <span>Practical solutions</span>
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  <span>Business-focused</span>
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  <span>Ongoing support</span>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                HERO VISUAL
            ================================================= */}

            <motion.div
              className="hero-visual"
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              <div className="hero-dashboard">

                <div className="hero-dashboard-header">
                  <div>
                    <span>IT OPERATIONS</span>
                    <strong>Business Technology Overview</strong>
                  </div>

                  <div className="hero-status">
                    <span></span>
                    Systems Active
                  </div>
                </div>

                <div className="hero-dashboard-grid">

                  <div className="hero-dashboard-card">
                    <div className="hero-card-icon">
                      <Server size={18} />
                    </div>

                    <span>POS Systems</span>

                    <strong>Supported</strong>

                    <small>
                      Installation & support
                    </small>
                  </div>

                  <div className="hero-dashboard-card">
                    <div className="hero-card-icon">
                      <Network size={18} />
                    </div>

                    <span>Networking</span>

                    <strong>Configured</strong>

                    <small>
                      Reliable connectivity
                    </small>
                  </div>

                  <div className="hero-dashboard-card">
                    <div className="hero-card-icon">
                      <Package size={18} />
                    </div>

                    <span>Inventory</span>

                    <strong>Integrated</strong>

                    <small>
                      Business system support
                    </small>
                  </div>

                  <div className="hero-dashboard-card">
                    <div className="hero-card-icon">
                      <Headphones size={18} />
                    </div>

                    <span>IT Support</span>

                    <strong>Available</strong>

                    <small>
                      Technical assistance
                    </small>
                  </div>

                </div>

                <div className="hero-dashboard-footer">

                  <div>
                    <span>Technology</span>
                    <strong>Connected</strong>
                  </div>

                  <div>
                    <span>Support</span>
                    <strong>Active</strong>
                  </div>

                  <div>
                    <span>Systems</span>
                    <strong>Monitored</strong>
                  </div>

                </div>
              </div>

              <div className="hero-floating-card hero-floating-top">
                <CheckCircle2 size={18} />

                <div>
                  <strong>Reliable IT</strong>
                  <span>Built for operations</span>
                </div>
              </div>

              <div className="hero-floating-card hero-floating-bottom">
                <Settings size={18} />

                <div>
                  <strong>Systems & Support</strong>
                  <span>End-to-end technology</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY STRIP
      ===================================================== */}

      <section className="capability-strip">
        <div className="container">
          <div className="capability-strip-inner">

            <span>POS SYSTEMS</span>
            <span>IT SUPPORT</span>
            <span>NETWORKING</span>
            <span>BUSINESS SYSTEMS</span>
            <span>HELPDESK SYSTEMS</span>
            <span>CUSTOM SOFTWARE</span>

          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="home-services">
        <div className="container">

          <div className="section-heading home-section-heading">

            <span className="eyebrow">
              WHAT I DO
            </span>

            <h2>
              Practical technology services for real business needs.
            </h2>

            <p>
              From day-to-day IT support to complete business systems,
              I focus on practical technology that solves operational
              problems and helps businesses work more efficiently.
            </p>

          </div>

          <div className="home-service-grid">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  className="home-service-card"
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                >
                  <div className="home-service-icon">
                    <Icon size={21} />
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <Link
                    to="/services"
                    className="text-link"
                  >
                    Learn more
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
              );
            })}

          </div>

          <div className="section-action">

            <Link
              to="/services"
              className="btn btn-secondary"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURED SOLUTION
      ===================================================== */}

      <section className="home-solution">
        <div className="container">

          <div className="home-solution-grid">

            <motion.div
              className="home-solution-content"
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <span className="eyebrow">
                FEATURED SOLUTION
              </span>

              <h2>
                Jaza IT Helpdesk & Ticketing System
              </h2>

              <p>
                A centralized IT support platform built to help
                a multi-branch business report, assign, track and
                resolve technology issues.
              </p>

              <div className="solution-checks">

                <div>
                  <CheckCircle2 size={17} />
                  <span>Multi-branch ticket management</span>
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  <span>Role-based access control</span>
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  <span>Ticket assignment and tracking</span>
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  <span>Operational dashboards</span>
                </div>

              </div>

              <Link
                to="/solutions"
                className="btn btn-light"
              >
                Explore the Solution
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            <motion.div
              className="home-solution-visual"
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="solution-mini-dashboard">

                <div className="mini-dashboard-header">

                  <div>
                    <span>JAZA IT HELPDESK</span>
                    <strong>Support Overview</strong>
                  </div>

                  <div className="mini-online">
                    <span></span>
                    Online
                  </div>

                </div>

                <div className="mini-stat-grid">

                  <div>
                    <span>Ticketing</span>
                    <strong>Centralized</strong>
                  </div>

                  <div>
                    <span>Branches</span>
                    <strong>Multi-Branch</strong>
                  </div>

                  <div>
                    <span>Assignment</span>
                    <strong>Role-Based</strong>
                  </div>

                  <div>
                    <span>Reporting</span>
                    <strong>Dashboard</strong>
                  </div>

                </div>

                <div className="mini-ticket-list">

                  <div className="mini-ticket">
                    <div>
                      <strong>POS terminal issue</strong>
                      <span>JZA-1042</span>
                    </div>

                    <span className="mini-ticket-status">
                      In Progress
                    </span>
                  </div>

                  <div className="mini-ticket">
                    <div>
                      <strong>Network connectivity</strong>
                      <span>JZA-1041</span>
                    </div>

                    <span className="mini-ticket-status resolved">
                      Resolved
                    </span>
                  </div>

                  <div className="mini-ticket">
                    <div>
                      <strong>Printer not responding</strong>
                      <span>JZA-1040</span>
                    </div>

                    <span className="mini-ticket-status open">
                      Open
                    </span>
                  </div>

                </div>

              </div>

              <p className="solution-preview-note">
                Representative interface preview — data shown is
                for demonstration purposes.
              </p>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY WORK WITH ME
      ===================================================== */}

      <section className="home-why">
        <div className="container">

          <div className="home-why-grid">

            <div className="home-why-intro">

              <span className="eyebrow">
                WHY WORK WITH ME
              </span>

              <h2>
                Technology should make business easier.
              </h2>

              <p>
                I approach IT from both the technical and
                operational side. The objective is not simply
                to install technology, but to make sure it
                actually supports the people and processes
                using it.
              </p>

              <Link
                to="/about"
                className="text-link"
              >
                More about me
                <ArrowRight size={15} />
              </Link>

            </div>

            <div className="home-strengths">

              {strengths.map((strength, index) => (
                <motion.div
                  className="home-strength"
                  key={strength}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                >

                  <span className="strength-number">
                    0{index + 1}
                  </span>

                  <span>
                    {strength}
                  </span>

                  <CheckCircle2 size={17} />

                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-cta">
        <div className="container">

          <motion.div
            className="home-cta-inner"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div>

              <span className="eyebrow">
                LET'S WORK TOGETHER
              </span>

              <h2>
                Have a technology problem that needs solving?
              </h2>

              <p>
                Tell me what you're trying to achieve and let's
                explore a practical technology solution for your
                business.
              </p>

            </div>

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Request an IT Service
              <ArrowRight size={17} />
            </Link>

          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Home;