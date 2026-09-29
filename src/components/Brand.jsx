import { Link } from "react-router-dom";

function Brand({ footer = false }) {
  return (
    <Link
      to="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
    >
      <div className="brand-mark">
        <span>BM</span>
      </div>

      <div className="brand-text">
        <strong>Brian Mumo</strong>
        <span>IT Solutions • Systems • Support</span>
      </div>
    </Link>
  );
}

export default Brand;