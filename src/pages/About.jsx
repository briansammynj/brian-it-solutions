import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Network,
  Server,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/brian-profile.jpg";

const capabilities = [
  {
    icon: Headphones,
    title: "IT Support",
    text: "Technical support, troubleshooting and issue resolution for users, systems and business devices.",
  },
  {
    icon: Server,
    title: "POS & Business Systems",
    text: "Supporting POS, inventory and other operational systems used in day-to-day business environments.",
  },
  {
    icon: Network,
    title: "Networking",
    text: "Network connectivity, infrastructure and troubleshooting to keep business systems connected.",
  },
  {
    icon: Settings,
    title: "Systems & Integration",
    text: "Connecting systems and improving technology workflows around real business requirements.",
  },
];

const experience = [
  "POS systems and retail technology",
  "IT support and troubleshooting",
  "Networking and connectivity",
  "Inventory and business systems",
  "System administration",
  "IT helpdesk and ticketing systems",
];

const approach = [
  {
    number: "01",
    title: "Understand the problem",
    text: "I start by understanding the business process, the users involved and the actual technology challenge.",
  },
  {
    number: "02",
    title: "Find a practical solution",
    text: "The solution should fit the business environment, available resources and operational requirements.",
  },
  {
    number: "03",
    title: "Implement with care",
    text: "Systems are configured, deployed or developed with the goal of minimizing disruption to business operations.",
  },
  {
    number: "04",
    title: "Support after implementation",
    text: "Technology needs ongoing attention, so support, maintenance and continuous improvement remain part of the process.",
  },
];

function About() {
  return (
    <>
      <Helmet>
        <title>About Brian Mumo | IT Solutions & Systems Support</title>

        <link
          rel="canonical"
          href="https://brian-it-solutions.vercel.app/about"
        />

        <meta
          name="description"
          content="Learn about Brian Mumo, an IT solutions professional focused on IT support, POS systems, networking, business systems, helpdesk platforms, system integration and practical technology solutions."
        />

        <meta
          name="keywords"
          content="Brian Mumo, IT solutions Kenya, IT support Kenya, POS support Kenya, business systems Kenya, networking Kenya, system administration, IT helpdesk, system integration"
        />

        <meta
          property="og:title"
          content="About Brian Mumo | IT Solutions & Systems Support"
        />

        <meta
          property="og:description"
          content="IT solutions professional focused on practical business technology, IT support, POS systems, networking, business systems and IT helpdesk solutions."
        />

        <meta
          property="og:type"
          content="profile"
        />

        <meta
          property="og:url"
          content="https://brian-it-solutions.vercel.app/about"
        />

        <meta
          property="og:image"
          content="https://brian-it-solutions.vercel.app/og-image.jpg"
        />
      </Helmet>

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="page-hero about-page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span className="eyebrow">
              ABOUT BRIAN MUMO
            </span>

            <h1>
              Technology should make business easier.
            </h1>

            <p>
              I help businesses implement, support and improve
              the technology they depend on — from POS and
              business systems to networking, IT support and
              custom solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROFILE
      ===================================================== */}

      <section className="about-profile">
        <div className="container">
          <div className="about-profile-grid">

            {/* Profile Card */}

            <motion.div
              className="about-profile-card"
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
              <div className="about-profile-avatar">
                <img
                  src={profilePhoto}
                  alt="Brian Mumo - IT Solutions Specialist"
                />
              </div>

              <div className="about-profile-name">
                <h2>Brian Mumo</h2>

                <span>
                  IT Solutions • Systems • Support
                </span>
              </div>

              <div className="about-profile-divider"></div>

              <div className="about-profile-meta">
                <div>
                  <span>Focus</span>

                  <strong>
                    Business Technology
                  </strong>
                </div>

                <div>
                  <span>Specialization</span>

                  <strong>
                    IT & Systems Support
                  </strong>
                </div>

                <div>
                  <span>Approach</span>

                  <strong>
                    Practical & Business-Focused
                  </strong>
                </div>
              </div>
            </motion.div>

            {/* Introduction */}

            <motion.div
              className="about-intro"
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
              <span className="eyebrow">
                WHO I AM
              </span>

              <h2>
                I work at the intersection of technology
                and business operations.
              </h2>

              <p>
                I am an IT solutions professional with practical
                experience supporting technology in business and
                retail environments. My work covers day-to-day
                IT support as well as the systems, infrastructure
                and processes that businesses rely on.
              </p>

              <p>
                This includes supporting POS systems, troubleshooting
                technical issues, maintaining network connectivity,
                working with inventory and business systems, and
                developing solutions that improve how teams work.
              </p>

              <p>
                I believe good technology should solve a real
                business problem. The goal is not simply to add
                another system, but to make operations more
                reliable, efficient and easier to manage.
              </p>

              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Let's Discuss Your Needs
                <ArrowRight size={17} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="about-capabilities">
        <div className="container">

          <div className="section-heading">
            <span className="eyebrow">
              CORE CAPABILITIES
            </span>

            <h2>
              Practical IT expertise across business systems.
            </h2>

            <p>
              My experience spans day-to-day IT support as well
              as the systems and infrastructure that businesses
              depend on to operate effectively.
            </p>
          </div>

          <div className="about-capability-grid">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="about-capability-card"
                  key={item.title}
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
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                >
                  <div className="about-capability-icon">
                    <Icon size={21} />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>
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

            <div className="about-experience-content">
              <span className="eyebrow">
                EXPERIENCE
              </span>

              <h2>
                Supporting technology in a
                fast-moving business environment.
              </h2>

              <p>
                Working in a retail environment has provided
                practical exposure to technology that directly
                affects daily business operations. Systems need
                to work, users need timely support and technical
                issues need to be resolved with minimal disruption.
              </p>

              <p>
                This experience has shaped a practical approach
                to IT — understand the issue, identify the cause,
                implement the right solution and make sure the
                system remains reliable.
              </p>

              <p>
                It has also provided experience working with
                technology from an operational perspective, where
                reliability, availability and user experience
                matter every day.
              </p>
            </div>

            <div className="about-experience-list">

              {experience.map((item, index) => (
                <motion.div
                  className="about-experience-item"
                  key={item}
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
                    delay: index * 0.06,
                  }}
                >
                  <CheckCircle2 size={18} />

                  <span>
                    {item}
                  </span>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="about-approach">
        <div className="container">

          <div className="section-heading">
            <span className="eyebrow">
              HOW I WORK
            </span>

            <h2>
              From the problem to a working solution.
            </h2>

            <p>
              A structured approach helps ensure that technology
              solves the right problem and remains useful after
              implementation.
            </p>
          </div>

          <div className="about-approach-grid">

            {approach.map((item, index) => (
              <motion.div
                className="about-approach-card"
                key={item.number}
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
                  duration: 0.45,
                  delay: index * 0.07,
                }}
              >
                <span className="about-approach-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>
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
                Have an IT challenge to solve?
              </h2>

              <p>
                Tell me what you're trying to achieve and
                let's explore a practical technology solution
                for your business.
              </p>
            </div>

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get in Touch
              <ArrowRight size={17} />
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default About;