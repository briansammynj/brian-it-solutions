import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Database,
  GitBranch,
  Headphones,
  LayoutDashboard,
  LockKeyhole,
  MessageSquare,
  Network,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: LockKeyhole,
    title: "Role-Based Access",
    description:
      "Different access levels for administrators, IT officers and branch users, with each role seeing the functions relevant to its responsibilities.",
  },
  {
    icon: GitBranch,
    title: "Multi-Branch Support",
    description:
      "Centralized IT support across multiple business branches and locations.",
  },
  {
    icon: ClipboardList,
    title: "Ticket Management",
    description:
      "Create, assign, track and resolve IT issues through a structured support workflow.",
  },
  {
    icon: Users,
    title: "IT Officer Assignment",
    description:
      "Tickets can be assigned to specific IT officers for accountability, ownership and follow-up.",
  },
  {
    icon: MessageSquare,
    title: "Comments & Resolution",
    description:
      "Support teams can communicate through ticket comments and record the resolution of completed issues.",
  },
  {
    icon: BarChart3,
    title: "Operational Visibility",
    description:
      "Dashboards provide visibility into ticket status, priorities, assignments and support activity.",
  },
];

const capabilities = [
  {
    icon: ClipboardList,
    title: "Ticket Management",
    text: "Centralized creation, assignment, tracking and resolution of IT issues.",
  },
  {
    icon: Users,
    title: "User Management",
    text: "Manage branch users, IT officers and administrator access.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    text: "Provide operational visibility through role-specific dashboards.",
  },
  {
    icon: Network,
    title: "Multi-Branch Operations",
    text: "Support IT operations across different branches from one system.",
  },
  {
    icon: Headphones,
    title: "IT Support Workflow",
    text: "Structure the process from issue reporting through assignment and resolution.",
  },
  {
    icon: Database,
    title: "Centralized Data",
    text: "Keep tickets, users, assignments, comments and resolutions in one system.",
  },
];

const projectScope = [
  {
    icon: Users,
    title: "User & Role Management",
    text: "Separate workflows and permissions for administrators, IT officers and branch users.",
  },
  {
    icon: GitBranch,
    title: "Branch Management",
    text: "Organize support operations across multiple business branches.",
  },
  {
    icon: ClipboardList,
    title: "Ticket Workflow",
    text: "Handle issue reporting, assignment, status updates, comments and resolution.",
  },
  {
    icon: LayoutDashboard,
    title: "Operational Dashboards",
    text: "Provide role-specific views of support activity and ticket information.",
  },
];

function Solutions() {
  return (
    <>
      <Helmet>
        <title>IT Solutions & Systems | Brian Mumo</title>

        <link
          rel="canonical"
          href="https://brian-it-solutions.vercel.app/solutions"
        />

        <meta
          name="description"
          content="Explore practical IT solutions and business systems developed by Brian Mumo, including the Jaza IT Helpdesk & Ticketing System, business dashboards, support platforms, system integration and custom software."
        />

        <meta
          name="keywords"
          content="IT solutions Kenya, IT systems Kenya, IT helpdesk system, ticketing system, business systems, system integration Kenya, custom software Kenya, Jaza IT Helpdesk"
        />

        <meta
          property="og:title"
          content="IT Solutions & Systems | Brian Mumo"
        />

        <meta
          property="og:description"
          content="Explore practical business technology solutions including IT helpdesk systems, ticketing platforms, dashboards, system integration and custom software."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="page-hero solutions-page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              SOLUTIONS
            </span>

            <h1>
              Technology solutions built around real business problems.
            </h1>

            <p>
              I design and build practical systems that improve
              visibility, streamline operations and help businesses
              manage technology more effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FEATURED SOLUTION
      ===================================================== */}

      <section className="featured-solution">
        <div className="container">

          <div className="featured-solution-grid">

            <motion.div
              className="featured-solution-content"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">
                FEATURED PROJECT
              </span>

              <h2>
                Jaza IT Helpdesk & Ticketing System
              </h2>

              <p className="solution-lead">
                A centralized IT support platform designed for a
                multi-branch business to report, assign, track and
                resolve technology issues through a structured workflow.
              </p>

              <div className="solution-meta">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MySQL</span>
              </div>

              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Discuss a Similar System
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            {/* =================================================
                DASHBOARD PREVIEW
            ================================================= */}

            <motion.div
              className="solution-dashboard"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mock-browser">

                <div className="mock-browser-bar">
                  <span></span>
                  <span></span>
                  <span></span>

                  <div className="mock-browser-title">
                    Jaza IT Helpdesk
                  </div>
                </div>

                <div className="mock-dashboard">

                  <div className="mock-sidebar">

                    <div className="mock-logo">
                      JAZA
                    </div>

                    <div className="mock-nav active">
                      Dashboard
                    </div>

                    <div className="mock-nav">
                      Tickets
                    </div>

                    <div className="mock-nav">
                      Users
                    </div>

                    <div className="mock-nav">
                      Branches
                    </div>

                  </div>

                  <div className="mock-main">

                    <div className="mock-heading">

                      <div>
                        <strong>IT Dashboard</strong>
                        <small>Support overview</small>
                      </div>

                      <div className="mock-user">
                        Admin
                      </div>

                    </div>

                    <div className="mock-stats">

                      <div className="mock-stat">
                        <span>Total Tickets</span>
                        <strong>—</strong>
                      </div>

                      <div className="mock-stat">
                        <span>Open</span>
                        <strong>—</strong>
                      </div>

                      <div className="mock-stat">
                        <span>In Progress</span>
                        <strong>—</strong>
                      </div>

                      <div className="mock-stat">
                        <span>Resolved</span>
                        <strong>—</strong>
                      </div>

                    </div>

                    <div className="mock-table">

                      <div className="mock-table-header">
                        <span>Ticket</span>
                        <span>Priority</span>
                        <span>Status</span>
                      </div>

                      <div className="mock-table-row">
                        <span>POS issue</span>

                        <span className="mock-high">
                          High
                        </span>

                        <span className="mock-progress">
                          In Progress
                        </span>
                      </div>

                      <div className="mock-table-row">
                        <span>Network issue</span>

                        <span>
                          Medium
                        </span>

                        <span className="mock-resolved">
                          Resolved
                        </span>
                      </div>

                      <div className="mock-table-row">
                        <span>Printer issue</span>

                        <span>
                          Critical
                        </span>

                        <span className="mock-open">
                          Open
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <p className="solution-preview-note">
                Representative interface preview — data shown is for
                demonstration purposes.
              </p>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT SCOPE
      ===================================================== */}

      <section className="project-scope-section">
        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              PROJECT SCOPE
            </span>

            <h2>
              A complete support workflow, not just a ticket form.
            </h2>

            <p>
              The system was designed around the operational
              requirements of a multi-branch IT support environment.
            </p>

          </div>

          <div className="project-scope-grid">

            {projectScope.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="project-scope-card"
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
                    delay: index * 0.06,
                  }}
                >

                  <div className="project-scope-icon">
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
          THE PROBLEM
      ===================================================== */}

      <section className="solution-story">
        <div className="container">

          <div className="story-grid">

            <motion.div
              className="story-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >

              <span className="eyebrow">
                THE CHALLENGE
              </span>

              <h2>
                IT issues need visibility and accountability.
              </h2>

              <p>
                In a multi-branch environment, technology issues
                can become difficult to track when requests are
                handled through informal communication channels.
              </p>

              <p>
                Support teams need to know what has been reported,
                who is handling it, its priority and whether the
                issue has actually been resolved.
              </p>

            </motion.div>

            <motion.div
              className="story-card story-card-highlight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >

              <span className="eyebrow">
                THE SOLUTION
              </span>

              <h2>
                A centralized IT support workflow.
              </h2>

              <p>
                The Jaza Helpdesk brings issue reporting, ticket
                assignment, status tracking, comments and resolution
                into one centralized platform.
              </p>

              <p>
                Role-based access ensures that branch users,
                IT officers and administrators interact with the
                system according to their responsibilities.
              </p>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="solution-features">
        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              SYSTEM FEATURES
            </span>

            <h2>
              Built around the IT support workflow.
            </h2>

            <p>
              The system focuses on the processes an IT team needs
              to manage support requests effectively.
            </p>

          </div>

          <div className="solution-feature-grid">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  className="solution-feature-card"
                  key={feature.title}
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
                    delay: index * 0.06,
                  }}
                >

                  <div className="solution-feature-icon">
                    <Icon size={21} />
                  </div>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="technology-section">
        <div className="container">

          <div className="technology-grid">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >

              <span className="eyebrow">
                TECHNOLOGY
              </span>

              <h2>
                A modern web application stack.
              </h2>

              <p>
                The platform was developed using technologies
                suited to building a responsive, database-driven
                business application.
              </p>

            </motion.div>

            <motion.div
              className="technology-stack"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >

              <div className="technology-item">
                <strong>React</strong>
                <span>Frontend interface</span>
              </div>

              <div className="technology-item">
                <strong>Node.js</strong>
                <span>Backend runtime</span>
              </div>

              <div className="technology-item">
                <strong>Express</strong>
                <span>REST API</span>
              </div>

              <div className="technology-item">
                <strong>MySQL</strong>
                <span>Relational database</span>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="capabilities-section">
        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              CAPABILITIES
            </span>

            <h2>
              What the system makes possible.
            </h2>

          </div>

          <div className="capabilities-grid">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="capability-card"
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
                    delay: index * 0.06,
                  }}
                >

                  <Icon size={20} />

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT HIGHLIGHT
      ===================================================== */}

      <section className="project-highlight">
        <div className="container">

          <motion.div
            className="project-highlight-inner"
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
                FROM IDEA TO IMPLEMENTATION
              </span>

              <h2>
                Need a system built around your business process?
              </h2>

              <p>
                The same approach used to build the Jaza Helpdesk
                can be applied to internal tools, dashboards,
                inventory systems, workflow platforms and other
                business applications.
              </p>

            </div>

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Discuss Your Project
              <ArrowRight size={17} />
            </Link>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          FUTURE SOLUTIONS
      ===================================================== */}

      <section className="future-solutions">
        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              OTHER SOLUTIONS
            </span>

            <h2>
              Technology can support more than IT tickets.
            </h2>

            <p>
              Business systems can be designed around the specific
              processes and information your organization needs
              to manage.
            </p>

          </div>

          <div className="future-solution-grid">

            <div className="future-solution-card">
              <Database size={22} />

              <h3>
                Inventory Management
              </h3>

              <p>
                Systems for tracking stock, movement, availability
                and operational information.
              </p>
            </div>

            <div className="future-solution-card">
              <BarChart3 size={22} />

              <h3>
                Business Dashboards
              </h3>

              <p>
                Centralized dashboards that turn operational data
                into useful business visibility.
              </p>
            </div>

            <div className="future-solution-card">
              <Headphones size={22} />

              <h3>
                Support Platforms
              </h3>

              <p>
                Internal systems that organize requests, workflows,
                users and service operations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="solution-cta">
        <div className="container">

          <div className="cta-box">

            <CheckCircle2 size={28} />

            <h2>
              Have a business process that could work better?
            </h2>

            <p>
              Let's discuss the problem and explore whether a
              technology solution can make the process simpler,
              faster or more visible.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Start a Conversation
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}

export default Solutions;