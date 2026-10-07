import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useForm } from "@formspree/react";
import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

function Contact() {
  const [state, handleSubmit] = useForm("xwlpagpd");
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      title: "IT Support",
      description: "Troubleshooting, maintenance and technical assistance.",
    },
    {
      title: "POS Systems",
      description: "POS setup, support, troubleshooting and integration.",
    },
    {
      title: "Networking",
      description: "Business networks, connectivity and infrastructure.",
    },
    {
      title: "Business Systems",
      description: "Inventory, operational and business technology systems.",
    },
    {
      title: "IT Helpdesk",
      description: "Ticketing, support workflows and service management.",
    },
    {
      title: "Custom Software",
      description: "Purpose-built systems, integrations and automation.",
    },
    {
      title: "System Integration",
      description: "Connecting business applications and technology platforms.",
    },
    {
      title: "IT Maintenance",
      description: "Ongoing technical maintenance and system support.",
    },
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Brian, I found your website and would like to enquire about your IT services."
  );

  return (
    <>
      <Helmet>
        <title>
          Contact Brian Mumo | IT Solutions & Support
        </title>

        <meta
          name="description"
          content="Request IT support, POS services, networking, business systems, helpdesk solutions, custom software or other technology services from Brian Mumo."
        />
      </Helmet>

      {/* =====================================================
          CONTACT HERO
          ===================================================== */}

      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-grid">
            <Reveal direction="left">
              <div className="contact-hero-content">
                <span className="eyebrow">
                  GET IN TOUCH
                </span>

                <h1>
                  Let's solve your
                  <span> technology challenge.</span>
                </h1>

                <p>
                  Tell me what your business needs help with.
                  Whether it's IT support, POS, networking,
                  business systems or a custom solution, I'll
                  help you identify a practical way forward.
                </p>

                <div className="contact-hero-points">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 size={17} />
                    <span>Business-focused solutions</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 size={17} />
                    <span>Practical technical support</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 size={17} />
                    <span>Clear communication from start to finish</span>
                  </motion.div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <motion.div
                className="contact-quick-card"
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="contact-quick-top">
                  <div className="contact-quick-icon">
                    <MessageCircle size={21} />
                  </div>

                  <div>
                    <span>QUICK CONTACT</span>
                    <strong>Prefer a direct conversation?</strong>
                  </div>
                </div>

                <p>
                  Reach out directly and let's discuss what
                  you're trying to solve.
                </p>

                <div className="contact-direct-links">
                  <a href="mailto:brianmumoit@gmail.com">
                    <Mail size={17} />
                    <span>
                      <small>Email</small>
                      brianmumoit@gmail.com
                    </span>
                  </a>

                  <a href="tel:+254711437854">
                    <Phone size={17} />
                    <span>
                      <small>Phone</small>
                      +254 711 437 854
                    </span>
                  </a>
                </div>

                <a
                  href={`https://wa.me/254711437854?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp-link"
                >
                  <MessageCircle size={17} />
                  Chat on WhatsApp
                  <ArrowRight size={15} />
                </a>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE REQUEST
          ===================================================== */}

      <section className="contact-request">
        <div className="container">
          <div className="contact-request-grid">
            <Reveal direction="left">
              <div className="contact-service-panel">
                <span className="eyebrow">
                  WHAT DO YOU NEED?
                </span>

                <h2>
                  Choose a service
                  <span> to get started.</span>
                </h2>

                <p>
                  Select the area you'd like help with. You can
                  then provide a few details so I can understand
                  your request before getting in touch.
                </p>

                <div className="contact-service-grid">
                  {services.map((service, index) => {
                    const isSelected =
                      selectedService === service.title;

                    return (
                      <motion.button
                        type="button"
                        key={service.title}
                        className={`contact-service-option ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleServiceSelect(service.title)
                        }
                        initial={{
                          opacity: 0,
                          y: 18,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.1,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          y: -3,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                      >
                        <span className="contact-service-check">
                          {isSelected ? (
                            <CheckCircle2 size={16} />
                          ) : (
                            <span />
                          )}
                        </span>

                        <span className="contact-service-copy">
                          <strong>{service.title}</strong>
                          <small>{service.description}</small>
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="contact-form-card">
                {state.succeeded ? (
                  <motion.div
                    className="contact-success"
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="contact-success-icon">
                      <CheckCircle2 size={30} />
                    </div>

                    <span className="eyebrow">
                      REQUEST RECEIVED
                    </span>

                    <h2>
                      Thanks for reaching out.
                    </h2>

                    <p>
                      Your service request has been sent
                      successfully. I'll review the details and
                      get back to you as soon as possible.
                    </p>

                    <Link
                      to="/"
                      className="btn btn-primary"
                    >
                      Back to Home
                      <ArrowRight size={17} />
                    </Link>
                  </motion.div>
                ) : (
                  <>
                    <div className="contact-form-header">
                      <div>
                        <span className="eyebrow">
                          SERVICE REQUEST
                        </span>

                        <h2>
                          Tell me about your needs.
                        </h2>
                      </div>

                      <div className="contact-form-badge">
                        <Sparkles size={15} />
                        Let's talk
                      </div>
                    </div>

                    {state.errors?.length > 0 && (
                      <div className="contact-form-error">
                        Something went wrong while sending your
                        request. Please try again or contact me
                        directly.
                      </div>
                    )}

                    <form
                      onSubmit={(event) => {
                        if (!selectedService) {
                          event.preventDefault();
                          return;
                        }

                        handleSubmit(event);
                      }}
                      className="contact-form"
                    >
                      <input
                        type="hidden"
                        name="service"
                        value={selectedService}
                      />

                      <div className="contact-form-row">
                        <label>
                          <span>Your name</span>

                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                          />
                        </label>

                        <label>
                          <span>Email address</span>

                          <input
                            type="email"
                            name="email"
                            placeholder="you@company.com"
                            required
                          />
                        </label>
                      </div>

                      <label>
                        <span>Company / Business</span>

                        <input
                          type="text"
                          name="company"
                          placeholder="Your business name"
                        />
                      </label>

                      <label>
                        <span>Selected service</span>

                        <div
                          className={`contact-selected-service ${
                            selectedService ? "has-value" : ""
                          }`}
                        >
                          {selectedService || "Select a service above"}
                        </div>
                      </label>

                      <label>
                        <span>Tell me about your request</span>

                        <textarea
                          name="message"
                          rows="6"
                          placeholder="Briefly describe the problem, system or service you need help with..."
                          required
                        />
                      </label>

                      <div className="contact-form-bottom">
                        <div className="contact-form-note">
                          <ShieldCheck size={16} />

                          <span>
                            Your information is only used to
                            respond to your enquiry.
                          </span>
                        </div>

                        <motion.button
                          type="submit"
                          className="btn btn-primary contact-submit"
                          disabled={
                            state.submitting || !selectedService
                          }
                          whileHover={{
                            y: -2,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                        >
                          {state.submitting ? (
                            <>
                              <span className="contact-spinner" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Request
                              <Send size={16} />
                            </>
                          )}
                        </motion.button>
                      </div>

                      {!selectedService && (
                        <p className="contact-selection-hint">
                          Select a service above before sending
                          your request.
                        </p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT HAPPENS NEXT
          ===================================================== */}

      <section className="contact-next">
        <div className="container">
          <Reveal>
            <div className="section-heading contact-section-heading">
              <span className="eyebrow">
                WHAT HAPPENS NEXT
              </span>

              <h2>
                Simple from the first
                <span> conversation.</span>
              </h2>

              <p>
                No complicated process. We start by understanding
                what you need and work from there.
              </p>
            </div>
          </Reveal>

          <div className="contact-next-grid">
            <Reveal direction="left">
              <motion.div
                className="contact-next-card"
                whileHover={{ y: -5 }}
              >
                <span className="contact-next-number">
                  01
                </span>

                <div className="contact-next-icon">
                  <MessageCircle size={20} />
                </div>

                <h3>Tell me what you need</h3>

                <p>
                  Send a request through the form or contact me
                  directly with the challenge you're facing.
                </p>
              </motion.div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <motion.div
                className="contact-next-card"
                whileHover={{ y: -5 }}
              >
                <span className="contact-next-number">
                  02
                </span>

                <div className="contact-next-icon">
                  <Clock3 size={20} />
                </div>

                <h3>We discuss the solution</h3>

                <p>
                  I'll review your requirements and we can
                  discuss the most practical approach.
                </p>
              </motion.div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <motion.div
                className="contact-next-card"
                whileHover={{ y: -5 }}
              >
                <span className="contact-next-number">
                  03
                </span>

                <div className="contact-next-icon">
                  <CheckCircle2 size={20} />
                </div>

                <h3>Move forward</h3>

                <p>
                  Once we agree on the approach, implementation,
                  support or next steps can begin.
                </p>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="contact-cta">
        <div className="container">
          <motion.div
            className="contact-cta-inner"
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
                READY WHEN YOU ARE
              </span>

              <h2>
                Let's make your technology
                <span> work better.</span>
              </h2>

              <p>
                Have a problem, an idea or a system that needs
                improving? Start the conversation today.
              </p>
            </div>

            <motion.a
              href={`https://wa.me/254711437854?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              Chat on WhatsApp
              <MessageCircle size={17} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;