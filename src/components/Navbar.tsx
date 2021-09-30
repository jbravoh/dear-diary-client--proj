import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <div>
      <nav>
        <h1><Link to="/">Dear Diary</Link></h1>
        <div>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/new-post">New Post</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
