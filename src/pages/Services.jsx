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
    number: "01",
    icon: Server,
    title: "POS Systems",
    description:
      "Installation, configuration, troubleshooting and ongoing support for point-of-sale systems used in retail and business environments.",
    points: [
      "POS installation and configuration",
      "POS troubleshooting and support",
      "Payment and transaction system support",
      "Retail system integration",
    ],
  },
  {
    number: "02",
    icon: Headphones,
    title: "IT Support",
    description:
      "Practical technical support for users, systems and devices, helping businesses resolve issues quickly and reduce operational downtime.",
    points: [
      "Hardware and software troubleshooting",
      "User and system support",
      "Technical issue diagnosis",
      "Ongoing IT assistance",
    ],
  },
  {
    number: "03",
    icon: Network,
    title: "Networking & Infrastructure",
    description:
      "Reliable network and connectivity solutions designed to keep business systems, devices and users connected.",
    points: [
      "LAN and network setup",
      "Wi-Fi configuration",
      "Connectivity troubleshooting",
      "Network device configuration",
    ],
  },
  {
    number: "04",
    icon: Package,
    title: "Inventory & Business Systems",
    description:
      "Technology solutions that help businesses manage inventory, operations and information more effectively.",
    points: [
      "Inventory system implementation",
      "System configuration",
      "Operational data visibility",
      "Business process support",
    ],
  },
  {
    number: "05",
    icon: Headphones,
    title: "IT Helpdesk Systems",
    description:
      "Centralized helpdesk and ticketing platforms that give businesses visibility over IT issues, assignments and resolutions.",
    points: [
      "Ticket management systems",
      "User and role management",
      "Issue assignment and tracking",
      "Dashboards and reporting",
    ],
  },
  {
    number: "06",
    icon: Settings,
    title: "System Integration",
    description:
      "Connecting business applications and systems so information can move between them efficiently and reliably.",
    points: [
      "System-to-system integration",
      "API integration",
      "Data flow improvement",
      "Process automation",
    ],
  },
  {
    number: "07",
    icon: Server,
    title: "Custom Software",
    description:
      "Purpose-built applications and internal tools designed around specific business processes and operational requirements.",
    points: [
      "Custom business applications",
      "Internal management tools",
      "Web-based systems",
      "Workflow solutions",
    ],
  },
  {
    number: "08",
    icon: Wrench,
    title: "IT Maintenance",
    description:
      "Ongoing technical maintenance that helps keep business technology reliable, secure and available.",
    points: [
      "Preventive maintenance",
      "System health checks",
      "Software and hardware support",
      "Ongoing technical assistance",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "I first understand the business problem, existing systems and operational requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I identify a practical solution based on the business needs, environment and available resources.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "The solution is configured, developed or deployed with minimal disruption to operations.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "After implementation, ongoing support and maintenance can keep the solution working reliably.",
  },
];

function Services() {
  return (
    <>
        <Helmet>
  <title>IT Services | Brian Mumo</title>

  <meta
    name="description"
    content="Professional IT services by Brian Mumo, including IT support, POS systems, networking, inventory systems, IT helpdesk solutions, system integration, custom software and IT maintenance."
  />

  <meta
    name="keywords"
    content="IT services Kenya, IT support Kenya, POS systems Kenya, networking services Kenya, IT helpdesk, inventory systems, system integration, custom software"
  />

  <meta
    property="og:title"
    content="IT Services | Brian Mumo"
  />

  <meta
    property="og:description"
    content="IT support, POS systems, networking, business systems, helpdesk platforms, system integration and custom software."
  />

  <meta
    property="og:type"
    content="website"
  />
</Helmet>
      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              SERVICES
            </span>

            <h1>
              IT solutions designed around how your business operates.
            </h1>

            <p>
              From POS systems and networking to helpdesk platforms
              and custom software, I provide practical technology
              solutions that help businesses operate more reliably
              and efficiently.
            </p>
          </motion.div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-page">
        <div className="container">

          <div className="section-heading">
            <span className="eyebrow">
              WHAT I CAN HELP WITH
            </span>

            <h2>
              Technology services for real business needs.
            </h2>

            <p>
              Whether you need to troubleshoot an existing system,
              improve your infrastructure or build something new,
              the focus is on practical solutions that support
              your day-to-day operations.
            </p>
          </div>


          <div className="service-detail-grid">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  className="service-detail-card"
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
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                >

                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-detail-icon">
                    <Icon size={22} />
                  </div>

                  <h2>
                    {service.title}
                  </h2>

                  <p>
                    {service.description}
                  </p>

                  <ul className="feature-list">
                    {service.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          HOW I WORK
      ===================================================== */}

      <section className="process-section">
        <div className="container">

          <div className="section-heading">
            <span className="eyebrow">
              HOW I WORK
            </span>

            <h2>
              From the problem to a working solution.
            </h2>

            <p>
              Good IT solutions start with understanding the
              business problem. The goal is to implement technology
              that is useful, maintainable and aligned with how
              the business operates.
            </p>
          </div>


          <div className="process-grid">

            {process.map((item, index) => (
              <motion.div
                key={item.number}
                className="process-card"
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
                  delay: index * 0.08,
                }}
              >

                <span className="process-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="services-cta">
        <div className="container">

          <motion.div
            className="cta-box"
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

            <h2>
              Have a technology problem that needs solving?
            </h2>

            <p>
              Tell me what you're trying to achieve and we can
              explore a practical technology solution for your
              business.
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
      </section>
    </>
  );
}

export default Services;