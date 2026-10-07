import { motion } from "framer-motion";
import {
  CheckCircle2,
  Database,
  Network,
  Server,
  ShieldCheck,
  Wifi,
} from "lucide-react";

function HeroVisual() {
  const systems = [
    {
      icon: Server,
      name: "POS Systems",
      status: "Operational",
      delay: 0,
    },
    {
      icon: Network,
      name: "Network",
      status: "Connected",
      delay: 0.08,
    },
    {
      icon: Database,
      name: "Business Systems",
      status: "Synced",
      delay: 0.16,
    },
  ];

  return (
    <div className="hero-visual">
      {/* Background glow */}
      <div
        className="hero-glow hero-glow-one"
        aria-hidden="true"
      />

      <div
        className="hero-glow hero-glow-two"
        aria-hidden="true"
      />

      {/* Technical grid */}
      <div
        className="hero-grid"
        aria-hidden="true"
      />

      {/* Floating network card */}
      <motion.div
        className="hero-floating-card hero-network-card"
        initial={{
          opacity: 0,
          x: 25,
          y: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="floating-icon">
          <Wifi size={17} />
        </div>

        <div>
          <strong>Connectivity</strong>
          <span>Network online</span>
        </div>

        <span className="floating-status">
          <span className="status-dot" />
          Live
        </span>
      </motion.div>


      {/* Main dashboard */}
      <motion.div
        className="hero-dashboard"
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Dashboard header */}
        <div className="hero-dashboard-header">
          <div>
            <span className="hero-dashboard-label">
              IT OPERATIONS
            </span>

            <h3>Systems Overview</h3>
          </div>

          <div className="dashboard-live">
            <span className="status-dot" />
            Live
          </div>
        </div>


        {/* Dashboard summary */}
        <div className="hero-dashboard-summary">
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


        {/* Systems */}
        <div className="hero-system-list">
          {systems.map((system) => {
            const Icon = system.icon;

            return (
              <motion.div
                className="hero-system"
                key={system.name}
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + system.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="hero-system-icon">
                  <Icon size={17} />
                </div>

                <div className="hero-system-info">
                  <strong>{system.name}</strong>
                  <span>{system.status}</span>
                </div>

                <CheckCircle2
                  className="hero-system-check"
                  size={18}
                />
              </motion.div>
            );
          })}
        </div>


        {/* Activity line */}
        <div className="hero-activity">
          <div className="hero-activity-label">
            <span />
            <span>Business technology</span>
          </div>

          <div className="hero-activity-line">
            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 1.3,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          <span className="hero-activity-value">
            Connected
          </span>
        </div>
      </motion.div>


      {/* Floating security card */}
      <motion.div
        className="hero-floating-card hero-security-card"
        initial={{
          opacity: 0,
          x: -20,
          y: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="floating-icon">
          <ShieldCheck size={17} />
        </div>

        <div>
          <strong>IT Support</strong>
          <span>Business ready</span>
        </div>
      </motion.div>


      {/* Decorative nodes */}
      <motion.span
        className="hero-node hero-node-one"
        animate={{
          y: [0, -8, 0],
          opacity: [0.45, 0.9, 0.45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="hero-node hero-node-two"
        animate={{
          y: [0, 8, 0],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default HeroVisual;