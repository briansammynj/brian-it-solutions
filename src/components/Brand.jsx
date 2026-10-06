import { Link } from "react-router-dom";

function Brand({ footer = false }) {
  return (
    <Link
      to="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Brian Mumo IT Solutions - Home"
    >
      <div className="brand-mark" aria-hidden="true">
        <span>BM</span>
      </div>

      <div className="brand-text">
        <strong>Brian Mumo IT Solutions</strong>

        <span>
          IT Solutions • Systems • Support
        </span>
      </div>
    </Link>
  );
}

export default Brand;