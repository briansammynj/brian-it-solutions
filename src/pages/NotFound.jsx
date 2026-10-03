import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Brian Mumo</title>
        <meta
          name="description"
          content="The page you're looking for could not be found."
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
            <div className="not-found-icon">
              <SearchX size={30} />
            </div>

            <span className="eyebrow">ERROR 404</span>

            <h1>Page not found.</h1>

            <p>
              The page you're looking for doesn't exist or may have
              been moved. Let's get you back on track.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary">
                <Home size={17} />
                Back to Home
              </Link>

              <Link to="/contact" className="btn btn-secondary">
                Request a Service
                <ArrowRight size={17} />
              </Link>
            </div>

            <Link to="/" className="not-found-back">
              <ArrowLeft size={15} />
              Return to Brian Mumo IT Solutions
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default NotFound;