import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Network,
  Server,
  Settings,
  Wrench,
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
    text: "I start by understanding the business process, the users involved and the actual technology problem.",
  },
  {
    number: "02",
    title: "Find a practical solution",
    text: "The solution should fit the business environment, available resources and operational requirements.",
  },
  {
    number: "03",
    title: "Implement with care",
    text: "Systems are configured, deployed or developed with the goal of minimizing disruption to operations.",
  },
  {
    number: "04",
    title: "Support after implementation",
    text: "Technology needs ongoing attention, so support and maintenance remain part of the process.",
  },
];

function About() {
  return (
    <>
    <Helmet>
  <title>About Brian Mumo | IT Professional</title>

  <meta
    name="description"
    content="Learn about Brian Mumo, an IT professional focused on business technology, IT support, POS systems, networking, systems integration, helpdesk platforms and practical IT solutions."
  />

  <meta
    name="keywords"
    content="Brian Mumo, IT professional Kenya, IT support Kenya, POS support Kenya, networking, system administration, IT solutions"
  />

  <meta
    property="og:title"
    content="About Brian Mumo | IT Professional"
  />

  <meta
    property="og:description"
    content="IT professional focused on practical business technology, IT support, POS systems, networking, systems integration and IT helpdesk solutions."
  />

  <meta
    property="og:type"
    content="profile"
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
              I work across IT support, business systems,
              infrastructure and software to help businesses
              solve practical technology problems.
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
                    alt="Brian Mumo"
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
                MY APPROACH
              </span>

              <h2>
                I work at the intersection of technology
                and business operations.
              </h2>

              <p>
                My work focuses on helping businesses use
                technology more effectively. That can mean
                troubleshooting a technical issue, supporting
                POS systems, improving network infrastructure,
                implementing business systems or developing a
                solution for a specific operational need.
              </p>

              <p>
                I believe technology should solve a real
                problem. The goal is not simply to introduce
                another system, but to make business operations
                more reliable, efficient and easier to manage.
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
              depend on.
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
                to work, issues need to be resolved quickly and
                downtime can have a direct operational impact.
              </p>

              <p>
                This experience has shaped a practical approach
                to IT — understand the issue, identify the cause,
                implement the right solution and make sure the
                system remains reliable.
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
                let's explore a practical technology solution.
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