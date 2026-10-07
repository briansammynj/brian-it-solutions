import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Headphones,
  Network,
  Server,
  Settings2,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import brianProfile from "../assets/brian-profile.jpg";
import Reveal from "../components/Reveal";

function About() {
  const capabilities = [
    {
      icon: Server,
      title: "Business Systems",
      text: "POS, inventory and operational technology.",
    },
    {
      icon: Headphones,
      title: "IT Support",
      text: "Practical troubleshooting and technical support.",
    },
    {
      icon: Network,
      title: "Infrastructure",
      text: "Networking, connectivity and system environments.",
    },
    {
      icon: Code2,
      title: "Custom Solutions",
      text: "Software, integrations and workflow systems.",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Understand",
      text: "I first understand the business problem, users and operational requirements.",
    },
    {
      number: "02",
      title: "Plan",
      text: "I identify a practical technology approach that fits the business environment.",
    },
    {
      number: "03",
      title: "Implement",
      text: "The solution is configured, built or deployed with usability and reliability in mind.",
    },
    {
      number: "04",
      title: "Support",
      text: "I provide ongoing technical support and improvements as business needs evolve.",
    },
  ];

  const experienceItems = [
    "POS systems & support",
    "Network & connectivity",
    "Business applications",
    "IT troubleshooting",
    "System implementation",
    "Process improvement",
  ];

  return (
    <>
      <Helmet>
        <title>
          About Brian Mumo | IT Solutions & Systems Support
        </title>

        <meta
          name="description"
          content="Learn about Brian Mumo and his practical, business-focused approach to IT solutions, systems support, POS, networking, helpdesk platforms and custom software."
        />
      </Helmet>


      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            <Reveal direction="left">
              <div className="about-hero-content">
                <motion.span
                  className="eyebrow"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  ABOUT BRIAN MUMO
                </motion.span>

                <h1>
                  Technology should
                  <span> make business easier.</span>
                </h1>

                <p>
                  I help businesses implement, support and improve
                  the technology they rely on every day — combining
                  practical IT support with systems thinking and
                  business-focused solutions.
                </p>

                <div className="about-hero-actions">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      className="btn btn-primary"
                    >
                      Work With Me
                      <ArrowRight size={17} />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/services"
                      className="btn btn-secondary"
                    >
                      Explore Services
                    </Link>
                  </motion.div>
                </div>

                <div className="about-hero-trust">
                  <span>
                    <CheckCircle2 size={15} />
                    Business-focused
                  </span>

                  <span>
                    <CheckCircle2 size={15} />
                    Practical solutions
                  </span>

                  <span>
                    <CheckCircle2 size={15} />
                    Ongoing support
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <motion.div
                className="about-profile-card"
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                }}
              >
                <div className="about-profile-image-wrap">
                  <motion.img
                    src={brianProfile}
                    alt="Brian Mumo"
                    className="about-profile-image"
                    initial={{ scale: 1.04 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <motion.div
                    className="about-profile-status"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.7,
                    }}
                  >
                    <span />
                    Available for IT services
                  </motion.div>

                  <div
                    className="about-profile-image-glow"
                    aria-hidden="true"
                  />
                </div>

                <div className="about-profile-info">
                  <div>
                    <span className="about-profile-label">
                      IT SOLUTIONS • SYSTEMS • SUPPORT
                    </span>

                    <h2>Brian Mumo</h2>

                    <p>
                      IT Solutions & Systems Support
                    </p>
                  </div>

                  <div className="about-profile-details">
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Focus</span>
                      <strong>
                        Business Technology
                      </strong>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Specialization</span>
                      <strong>
                        IT & Systems Support
                      </strong>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Approach</span>
                      <strong>
                        Practical & Business-Focused
                      </strong>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <Reveal direction="left">
              <div className="about-intro-heading">
                <span className="eyebrow">
                  WHO I AM
                </span>

                <h2>
                  Bridging technology
                  <span> and operations.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="about-intro-content">
                <p>
                  My work sits at the intersection of IT support,
                  business systems and practical technology
                  implementation.
                </p>

                <p>
                  I focus on understanding how technology is
                  actually used within a business — from the
                  systems employees depend on to the processes
                  that keep daily operations moving.
                </p>

                <p>
                  That perspective helps me approach technology
                  problems from both a technical and operational
                  point of view.
                </p>

                <motion.div
                  className="about-highlight"
                  whileHover={{ y: -3 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className="about-highlight-icon"
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <Workflow size={21} />
                  </motion.div>

                  <div>
                    <strong>
                      Technology with a purpose.
                    </strong>

                    <span>
                      Every solution should solve a real problem,
                      improve a process or make work more reliable.
                    </span>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-capabilities">
        <div className="container">
          <Reveal>
            <div className="section-heading about-section-heading">
              <span className="eyebrow">
                CAPABILITIES
              </span>

              <h2>
                Where I can help your business.
              </h2>

              <p>
                From technical support to complete business
                systems, I focus on solutions that are practical
                to implement and useful in the real world.
              </p>
            </div>
          </Reveal>

          <div className="about-capability-grid">
          {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="about-capability-card"
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -7,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                >
                  <motion.div
                    className="about-capability-icon"
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

                  <span className="about-capability-number">
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <motion.div
                    className="about-capability-line"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
          ===================================================== */}

      <section className="about-experience">
        <div className="container">
          <div className="about-experience-grid">
            <Reveal direction="left">
              <div>
                <span className="eyebrow">
                  EXPERIENCE
                </span>

                <h2>
                  Practical experience
                  <span> in business IT.</span>
                </h2>

                <p>
                  My experience includes supporting technology
                  environments in the retail industry, where
                  reliability, transaction speed and operational
                  continuity matter every day.
                </p>

                <p>
                  This has given me practical exposure to areas
                  such as POS systems, networking, troubleshooting,
                  business applications, inventory environments
                  and IT support operations.
                </p>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/services"
                    className="text-link"
                  >
                    See my services
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <motion.div
                className="about-experience-panel"
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="about-experience-panel-top">
                  <motion.div
                    className="experience-system-icon"
                    whileHover={{
                      rotate: 8,
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <Settings2 size={20} />
                  </motion.div>

                  <div>
                    <span>
                      BUSINESS TECHNOLOGY
                    </span>

                    <strong>
                      Systems & Support
                    </strong>
                  </div>
                </div>

                <div className="experience-list">
                  {experienceItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: 12,
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
                        duration: 0.4,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        x: 5,
                      }}
                    >
                      <CheckCircle2 size={17} />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="experience-panel-footer">
                  <span>
                    IT Solutions • Systems • Support
                  </span>

                  <span className="experience-live">
                    <span />
                    Active
                  </span>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
          ===================================================== */}

      <section className="about-approach">
        <div className="container">
          <Reveal>
            <div className="section-heading about-section-heading">
              <span className="eyebrow">
                MY APPROACH
              </span>

              <h2>
                A simple process built around
                <span> real business needs.</span>
              </h2>

              <p>
                Good technology starts with understanding the
                problem. My approach keeps implementation
                practical and focused on the outcome.
              </p>
            </div>
          </Reveal>

          <div className="about-approach-grid">
            {approach.map((step, index) => (
              <motion.div
                className="about-approach-card"
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                <motion.span
                  className="approach-number"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  {step.number}
                </motion.span>

                <motion.div
                  className="approach-line"
                  initial={{
                    scaleX: 0,
                    transformOrigin: "left",
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="about-cta">
        <div className="container">
          <motion.div
            className="about-cta-inner"
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
              amount: 0.2,
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
                Need reliable technology
                <span> for your business?</span>
              </h2>

              <p>
                Whether you need IT support, a business system,
                POS implementation or a custom technology solution,
                let's discuss what you need.
              </p>
            </div>

            <motion.div
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Start a Conversation
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;