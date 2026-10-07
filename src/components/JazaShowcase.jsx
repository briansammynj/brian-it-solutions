import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Headphones,
  Network,
  TicketCheck,
  Users,
} from "lucide-react";

const tickets = [
  {
    title: "POS terminal issue",
    number: "JZA-1042",
    status: "In Progress",
    statusClass: "progress",
  },
  {
    title: "Network connectivity",
    number: "JZA-1041",
    status: "Resolved",
    statusClass: "resolved",
  },
  {
    title: "Printer not responding",
    number: "JZA-1040",
    status: "Open",
    statusClass: "open",
  },
];

const stats = [
  {
    icon: TicketCheck,
    label: "Tickets",
    value: "Centralized",
  },
  {
    icon: Users,
    label: "Branches",
    value: "Multi-Branch",
  },
  {
    icon: Headphones,
    label: "Support",
    value: "Assigned",
  },
  {
    icon: Clock3,
    label: "Tracking",
    value: "Real-Time",
  },
];

function JazaShowcase() {
  return (
    <section className="jaza-showcase">
      <div className="jaza-background-grid" aria-hidden="true" />

      <div className="container">
        <div className="jaza-showcase-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="eyebrow">
              FEATURED CASE STUDY
            </span>

            <h2>
              Jaza IT Helpdesk &
              <span> Ticketing System</span>
            </h2>

            <p>
              A centralized IT support platform designed to help
              a multi-branch retail business report, assign,
              track and resolve technology issues.
            </p>
          </motion.div>

          <motion.div
            className="jaza-showcase-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
          >
            <span className="jaza-live-dot" />
            <span>System Concept</span>
          </motion.div>
        </div>

        <div className="jaza-showcase-grid">
          <motion.div
            className="jaza-copy"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="jaza-copy-intro">
              <span className="jaza-label">
                THE PROBLEM
              </span>

              <p>
                IT issues across multiple branches can become
                difficult to track when requests are handled
                through scattered communication channels.
              </p>
            </div>

            <div className="jaza-copy-intro">
              <span className="jaza-label">
                THE SOLUTION
              </span>

              <p>
                Jaza centralizes support requests into one
                platform where branch users can raise tickets
                and IT officers can manage, assign and resolve
                them.
              </p>
            </div>

            <div className="jaza-feature-list">
              <motion.div whileHover={{ x: 5 }}>
                <CheckCircle2 size={17} />
                <span>Role-based access control</span>
              </motion.div>

              <motion.div whileHover={{ x: 5 }}>
                <CheckCircle2 size={17} />
                <span>Multi-branch support</span>
              </motion.div>

              <motion.div whileHover={{ x: 5 }}>
                <CheckCircle2 size={17} />
                <span>Ticket assignment and tracking</span>
              </motion.div>

              <motion.div whileHover={{ x: 5 }}>
                <CheckCircle2 size={17} />
                <span>Comments and resolution workflow</span>
              </motion.div>

              <motion.div whileHover={{ x: 5 }}>
                <CheckCircle2 size={17} />
                <span>Operational dashboards</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="jaza-product-wrap"
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="jaza-product-glow" />

            <motion.div
              className="jaza-floating-card jaza-floating-one"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Network size={16} />
              <span>Branches Connected</span>
            </motion.div>

            <motion.div
              className="jaza-floating-card jaza-floating-two"
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Headphones size={16} />
              <span>IT Support Active</span>
            </motion.div>

            <motion.div
              className="jaza-product"
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="jaza-product-topbar">
                <div className="jaza-product-brand">
                  <div className="jaza-product-logo">
                    J
                  </div>

                  <div>
                    <strong>JAZA IT HELPDESK</strong>
                    <span>Support Management</span>
                  </div>
                </div>

                <div className="jaza-product-status">
                  <span />
                  Online
                </div>
              </div>

              <div className="jaza-product-body">
                <div className="jaza-product-heading">
                  <div>
                    <span>OVERVIEW</span>
                    <h3>Support Dashboard</h3>
                  </div>

                  <div className="jaza-user">
                    <span>IT</span>
                  </div>
                </div>

                <div className="jaza-stats">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                      <motion.div
                        className="jaza-stat"
                        key={stat.label}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay:
                            0.25 + index * 0.08,
                          duration: 0.45,
                        }}
                        whileHover={{
                          y: -3,
                        }}
                      >
                        <div className="jaza-stat-icon">
                          <Icon size={15} />
                        </div>

                        <div>
                          <span>{stat.label}</span>
                          <strong>{stat.value}</strong>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="jaza-ticket-heading">
                  <span>RECENT TICKETS</span>
                  <span>VIEW ALL</span>
                </div>

                <div className="jaza-ticket-list">
                  {tickets.map((ticket, index) => (
                    <motion.div
                      className="jaza-ticket"
                      key={ticket.number}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          0.5 + index * 0.1,
                        duration: 0.45,
                      }}
                    >
                      <div className="jaza-ticket-main">
                        <div className="jaza-ticket-icon">
                          <TicketCheck size={14} />
                        </div>

                        <div>
                          <strong>{ticket.title}</strong>
                          <span>{ticket.number}</span>
                        </div>
                      </div>

                      <span
                        className={`jaza-ticket-status ${ticket.statusClass}`}
                      >
                        {ticket.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="jaza-product-footer">
                  <div>
                    <span className="jaza-footer-pulse" />
                    <span>Support operations active</span>
                  </div>

                  <span>Jaza Helpdesk</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="jaza-showcase-footer"
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.15,
          }}
        >
          <div>
            <span>
              Built with
            </span>

            <strong>
              React
            </strong>

            <strong>
              Node.js
            </strong>

            <strong>
              Express
            </strong>

            <strong>
              MySQL
            </strong>
          </div>

          <a
            href="/solutions"
            className="jaza-case-link"
          >
            View Case Study
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default JazaShowcase;