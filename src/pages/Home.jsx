import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import HeroVisual from "../components/HeroVisual";
import Reveal from "../components/Reveal";
import JazaShowcase from "../components/JazaShowcase";

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
    text: "Installation, configuration, troubleshooting and support for reliable business POS environments.",
  },
  {
    icon: Headphones,
    title: "IT Support",
    text: "Practical technical support that keeps your business systems running and minimizes downtime.",
  },
  {
    icon: Network,
    title: "Networking",
    text: "Network, Wi-Fi and connectivity solutions designed for dependable day-to-day operations.",
  },
  {
    icon: Package,
    title: "Business Systems",
    text: "Inventory and operational systems built around the way your business actually works.",
  },
  {
    icon: Settings,
    title: "IT Helpdesk",
    text: "Centralized ticketing systems for managing IT issues, assignments and support workflows.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    text: "Purpose-built software, integrations and automation for specific business requirements.",
  },
];

const strengths = [
  "Business-focused IT solutions",
  "Practical implementation",
  "Reliable technical support",
  "Systems and process improvement",
];

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Brian Mumo IT Solutions | IT Support, POS & Business Systems
        </title>

        <link
          rel="canonical"
          href="https://brian-it-solutions.vercel.app/"
        />

        <meta
          name="description"
          content="Brian Mumo IT Solutions provides practical IT support, POS systems, networking, business systems, IT helpdesk platforms, system integration and custom software for businesses."
        />

        <meta
          name="keywords"
          content="IT support Kenya, IT solutions Kenya, POS systems Kenya, POS support Kenya, networking Kenya, IT helpdesk, business systems, system integration, custom software, Brian Mumo IT Solutions"
        />

        <meta
          property="og:title"
          content="Brian Mumo IT Solutions | IT Support, POS & Business Systems"
        />

        <meta
          property="og:description"
          content="Practical technology solutions for businesses — from IT support and POS systems to networking, business systems, helpdesk platforms and custom software."
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
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <motion.span
                className="eyebrow"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
              >
                IT SOLUTIONS • SYSTEMS • SUPPORT
              </motion.span>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Technology that works
                <span>
                  {" "}for your business.
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.3,
                }}
              >
                I help businesses implement, support and improve
                the technology they rely on — from POS and inventory
                systems to IT helpdesk platforms, networking,
                integrations and custom business software.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.42,
                }}
              >

                <Link
                  to="/contact"
                  className="btn btn-primary"
                >
                  Request IT Service
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/services"
                  className="btn btn-secondary"
                >
                  Explore Services
                </Link>

              </motion.div>

              <motion.div
                className="hero-trust"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.52,
                }}
              >

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

              </motion.div>

            </motion.div>

            {/* =================================================
                HERO VISUAL
            ================================================= */}

            <motion.div
              className="hero-visual-wrapper"
              initial={{
                opacity: 0,
                x: 45,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <HeroVisual />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY STRIP
      ===================================================== */}

      <section className="capability-strip">
        <div className="container">

          <motion.div
            className="capability-strip-inner"
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.55,
            }}
          >

            <span>POS SYSTEMS</span>
            <span>IT SUPPORT</span>
            <span>NETWORKING</span>
            <span>BUSINESS SYSTEMS</span>
            <span>HELPDESK SYSTEMS</span>
            <span>CUSTOM SOFTWARE</span>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="home-services">
        <div className="container">

          <Reveal>
            <div className="section-heading home-section-heading">

              <span className="eyebrow">
                WHAT I DO
              </span>

              <h2>
                Technology services built around real business needs.
              </h2>

              <p>
                From day-to-day IT support to complete business
                systems, I focus on practical technology that solves
                operational problems, improves efficiency and keeps
                businesses moving.
              </p>

            </div>
          </Reveal>

          <div className="home-service-grid">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  className="home-service-card"
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -7,
                  }}
                >

                  <motion.div
                    className="home-service-icon"
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <Icon size={21} />
                  </motion.div>

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

          <Reveal
            direction="up"
            delay={0.1}
          >
            <div className="section-action">

              <Link
                to="/services"
                className="btn btn-secondary"
              >
                View All Services
                <ArrowRight size={16} />
              </Link>

            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          FEATURED SOLUTION
      ===================================================== */}

      <section className="home-solution">
        <div className="container">

          <div className="home-solution-grid">

            <Reveal direction="left">
              <div className="home-solution-content">

                <span className="eyebrow">
                  FEATURED SOLUTION
                </span>

                <h2>
                  Jaza IT Helpdesk & Ticketing System
                </h2>

                <p>
                  A centralized IT support platform built to help
                  a multi-branch business report, assign, track and
                  resolve technology issues efficiently.
                </p>

                <div className="solution-checks">

                  <motion.div whileHover={{ x: 4 }}>
                    <CheckCircle2 size={17} />
                    <span>
                      Multi-branch ticket management
                    </span>
                  </motion.div>

                  <motion.div whileHover={{ x: 4 }}>
                    <CheckCircle2 size={17} />
                    <span>
                      Role-based access control
                    </span>
                  </motion.div>

                  <motion.div whileHover={{ x: 4 }}>
                    <CheckCircle2 size={17} />
                    <span>
                      Ticket assignment and tracking
                    </span>
                  </motion.div>

                  <motion.div whileHover={{ x: 4 }}>
                    <CheckCircle2 size={17} />
                    <span>
                      Operational dashboards
                    </span>
                  </motion.div>

                </div>

                <Link
                  to="/solutions"
                  className="btn btn-light"
                >
                  Explore the Solution
                  <ArrowRight size={17} />
                </Link>

              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.1}
            >
              <div className="home-solution-visual">

                <motion.div
                  className="solution-mini-dashboard"
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  <div className="mini-dashboard-header">

                    <div>
                      <span>
                        JAZA IT HELPDESK
                      </span>

                      <strong>
                        Support Overview
                      </strong>
                    </div>

                    <div className="mini-online">
                      <span></span>
                      Online
                    </div>

                  </div>

                  <div className="mini-stat-grid">

                    <motion.div whileHover={{ y: -3 }}>
                      <span>Ticketing</span>
                      <strong>Centralized</strong>
                    </motion.div>

                    <motion.div whileHover={{ y: -3 }}>
                      <span>Branches</span>
                      <strong>Multi-Branch</strong>
                    </motion.div>

                    <motion.div whileHover={{ y: -3 }}>
                      <span>Assignment</span>
                      <strong>Role-Based</strong>
                    </motion.div>

                    <motion.div whileHover={{ y: -3 }}>
                      <span>Reporting</span>
                      <strong>Dashboard</strong>
                    </motion.div>

                  </div>

                  <div className="mini-ticket-list">

                    <motion.div
                      className="mini-ticket"
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.25,
                      }}
                    >

                      <div>
                        <strong>
                          POS terminal issue
                        </strong>

                        <span>
                          JZA-1042
                        </span>
                      </div>

                      <span className="mini-ticket-status">
                        In Progress
                      </span>

                    </motion.div>

                    <motion.div
                      className="mini-ticket"
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.35,
                      }}
                    >

                      <div>
                        <strong>
                          Network connectivity
                        </strong>

                        <span>
                          JZA-1041
                        </span>
                      </div>

                      <span className="mini-ticket-status resolved">
                        Resolved
                      </span>

                    </motion.div>

                    <motion.div
                      className="mini-ticket"
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.45,
                      }}
                    >

                      <div>
                        <strong>
                          Printer not responding
                        </strong>

                        <span>
                          JZA-1040
                        </span>
                      </div>

                      <span className="mini-ticket-status open">
                        Open
                      </span>

                    </motion.div>

                  </div>

                </motion.div>

                <motion.p
                  className="solution-preview-note"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.55,
                  }}
                >
                  Representative interface preview — data shown is
                  for demonstration purposes.
                </motion.p>

              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY WORK WITH ME
      ===================================================== */}

      <section className="home-why">
        <div className="container">

          <div className="home-why-grid">

            <Reveal direction="left">
              <div className="home-why-intro">

                <span className="eyebrow">
                  WHY WORK WITH ME
                </span>

                <h2>
                  Technology should make business easier.
                </h2>

                <p>
                  I approach IT from both the technical and
                  operational side. The goal is not simply to
                  install technology, but to make sure it supports
                  the people, processes and goals behind the business.
                </p>

                <Link
                  to="/about"
                  className="text-link"
                >
                  More about me
                  <ArrowRight size={15} />
                </Link>

              </div>
            </Reveal>

            <div className="home-strengths">

              {strengths.map((strength, index) => (
                <motion.div
                  className="home-strength"
                  key={strength}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    x: 6,
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
              y: 25,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
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

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Request an IT Service
                <ArrowRight size={17} />
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Home;