import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useForm } from "@formspree/react";

const serviceOptions = [
  "IT Support",
  "POS Systems",
  "Networking & Infrastructure",
  "Inventory & Business Systems",
  "IT Helpdesk System",
  "Custom Software",
  "System Integration",
  "IT Maintenance",
  "Other",
];

function Contact() {
  const [state, handleSubmit, reset] = useForm("xwlpagpd");

  return (
    <>
      <Helmet>
        <title>Contact Brian Mumo | IT Services</title>

        <meta
          name="description"
          content="Contact Brian Mumo for IT support, POS systems, networking, business systems, IT helpdesk solutions, system integration, custom software and IT maintenance."
        />

        <meta
          name="keywords"
          content="contact IT support Kenya, IT services Kenya, POS support Kenya, networking support Kenya, IT consultant Kenya, Brian Mumo"
        />

        <meta
          property="og:title"
          content="Contact Brian Mumo | IT Services"
        />

        <meta
          property="og:description"
          content="Request IT support, POS solutions, networking, business systems, system integration or custom software services from Brian Mumo."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="page-hero contact-page-hero">
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
              GET IN TOUCH
            </span>

            <h1>
              Let's solve your technology challenges.
            </h1>

            <p>
              Whether you need IT support, a POS solution,
              networking, a business system or custom software,
              tell me what you need and let's discuss a practical
              solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <motion.div
              className="contact-info"
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
                START A CONVERSATION
              </span>

              <h2>
                Tell me what you need.
              </h2>

              <p>
                You don't need to have the technical details
                figured out before getting in touch. Explain the
                business problem or technology issue and we can
                work through the requirements together.
              </p>

              <div className="contact-methods">

                {/* Email */}

                <a
                  href="mailto:brianmumoit@gmail.com"
                  className="contact-method"
                >
                  <div className="contact-method-icon">
                    <Mail size={19} />
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>
                      brianmumoit@gmail.com
                    </strong>
                  </div>
                </a>

                {/* Phone */}

                <a
                  href="tel:+254711437854"
                  className="contact-method"
                >
                  <div className="contact-method-icon">
                    <Phone size={19} />
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>
                      +254 711 437 854
                    </strong>
                  </div>
                </a>

                {/* WhatsApp */}

                <a
                  href="https://wa.me/254711437854"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method"
                >
                  <div className="contact-method-icon">
                    <MessageCircle size={19} />
                  </div>

                  <div>
                    <span>WhatsApp</span>
                    <strong>
                      Chat on WhatsApp
                    </strong>
                  </div>
                </a>

              </div>

              <div className="contact-note">
                <CheckCircle2 size={18} />

                <p>
                  I focus on practical technology solutions
                  that fit the way your business actually works.
                </p>
              </div>
            </motion.div>

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <motion.div
              className="contact-form-wrapper"
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

              {state.succeeded ? (
                <div className="contact-success">

                  <div className="contact-success-icon">
                    <CheckCircle2 size={30} />
                  </div>

                  <h2>
                    Request sent successfully.
                  </h2>

                  <p>
                    Thank you for getting in touch. Your service
                    request has been received and I'll get back
                    to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={reset}
                  >
                    Send Another Request
                  </button>

                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="form-heading">
                    <h2>
                      Request an IT Service
                    </h2>

                    <p>
                      Share a few details about your business
                      and request so I can better understand how
                      to help.
                    </p>
                  </div>

                  {/* Name + Company */}

                  <div className="form-row">

                    <div className="form-group">
                      <label htmlFor="name">
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">
                        Company / Business
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company name"
                      />
                    </div>

                  </div>

                  {/* Email + Phone */}

                  <div className="form-row">

                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+254 ..."
                      />
                    </div>

                  </div>

                  {/* Location + Service */}

                  <div className="form-row">

                    <div className="form-group">
                      <label htmlFor="location">
                        Business Location
                      </label>

                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="e.g. Nairobi"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">
                        Service Needed
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                      >
                        <option value="">
                          Select a service
                        </option>

                        {serviceOptions.map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Urgency + Preferred Contact */}

                  <div className="form-row">

                    <div className="form-group">
                      <label htmlFor="urgency">
                        How urgent is this?
                      </label>

                      <select
                        id="urgency"
                        name="urgency"
                      >
                        <option value="">
                          Select urgency
                        </option>

                        <option value="General enquiry">
                          General enquiry
                        </option>

                        <option value="Planning / Future project">
                          Planning / Future project
                        </option>

                        <option value="Need assistance soon">
                          Need assistance soon
                        </option>

                        <option value="Urgent business issue">
                          Urgent business issue
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="preferred_contact">
                        Preferred Contact
                      </label>

                      <select
                        id="preferred_contact"
                        name="preferred_contact"
                      >
                        <option value="">
                          Select method
                        </option>

                        <option value="Email">
                          Email
                        </option>

                        <option value="Phone">
                          Phone
                        </option>

                        <option value="WhatsApp">
                          WhatsApp
                        </option>
                      </select>
                    </div>

                  </div>

                  {/* Message */}

                  <div className="form-group">
                    <label htmlFor="message">
                      Tell me about your request
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Describe the problem, system or project you need help with..."
                      rows="6"
                      required
                    />
                  </div>

                  {/* Formspree errors */}

                  {state.errors && (
                    <div className="form-error">
                      <strong>
                        Something went wrong.
                      </strong>

                      <p>
                        Your request could not be submitted.
                        Please try again or contact me directly
                        using WhatsApp, phone or email.
                      </p>
                    </div>
                  )}

                  {/* Submit */}

                  <button
                    type="submit"
                    className="btn btn-primary form-submit"
                    disabled={state.submitting}
                  >
                    {state.submitting
                      ? "Sending Request..."
                      : "Send Service Request"}

                    <ArrowRight size={17} />
                  </button>

                  <p className="form-disclaimer">
                    Your information will be securely submitted
                    through the website and used to respond to
                    your service request.
                  </p>

                </form>
              )}

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="contact-bottom">
        <div className="container">

          <motion.div
            className="contact-bottom-inner"
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
                NEED IT SUPPORT?
              </span>

              <h2>
                Let's find the right technology solution.
              </h2>

              <p>
                From troubleshooting an existing system to
                implementing something completely new.
              </p>
            </div>

            <a
              href="mailto:brianmumoit@gmail.com"
              className="btn btn-primary"
            >
              Email Me
              <ArrowRight size={17} />
            </a>

          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Contact;