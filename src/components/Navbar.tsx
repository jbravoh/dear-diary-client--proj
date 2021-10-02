import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar(): JSX.Element {
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo ">
        <Link to="/" className="link">
          Dear Diary
        </Link>
      </h1>

      <div className="nav-container">
        <ul className="nav-menu">
          <li>
            <Link to="/new-post" className="nav-link">
              New Post
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
