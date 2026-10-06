import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Brian Mumo IT Solutions</title>

        <meta
          name="description"
          content="The page you're looking for could not be found. Return to Brian Mumo IT Solutions or request an IT service."
        />

        <meta
          name="robots"
          content="noindex, follow"
        />
      </Helmet>

      <main className="not-found-page">
        <div className="container">
          <motion.div
            className="not-found-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="not-found-icon"
              aria-hidden="true"
            >
              <SearchX size={30} />
            </div>

            <span className="eyebrow">ERROR 404</span>

            <h1>Page not found.</h1>

            <p>
              The page you're looking for doesn't exist or may
              have been moved. Let's get you back on track.
            </p>

            <div className="not-found-actions">
              <Link
                to="/"
                className="btn btn-primary"
              >
                <Home
                  size={17}
                  aria-hidden="true"
                />

                <span>Back to Home</span>
              </Link>

              <Link
                to="/contact"
                className="btn btn-secondary"
              >
                <span>Request a Service</span>

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                />
              </Link>
            </div>

            <Link
              to="/"
              className="not-found-back"
            >
              <ArrowLeft
                size={15}
                aria-hidden="true"
              />

              <span>
                Return to Brian Mumo IT Solutions
              </span>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default NotFound;