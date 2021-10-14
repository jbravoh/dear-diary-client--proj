import { Link } from "react-router-dom";
import "../css/Navbar.css";

interface NavbarProps {
  setAuth: (boolean: boolean) => void;
  isAuthenticated: boolean;
}

export default function Navbar({
  setAuth,
  isAuthenticated,
}: NavbarProps): JSX.Element {
  const logout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };

  const authenticatedNav = () => {
    return (
      <div className="nav-container">
        <ul className="nav-menu">
          <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/new-post" className="nav-link">
              New Post
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link" onClick={(e) => logout(e)}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const notAuthenticatedNav = () => {
    return (
      <div className="nav-container">
        <ul className="nav-menu">
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
    );
  };

  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo ">
        <Link to="/dashboard" className="link">
          DEAR DIARY
        </Link>
      </h1>
      {isAuthenticated ? authenticatedNav() : notAuthenticatedNav()}
    </nav>
  );
}
