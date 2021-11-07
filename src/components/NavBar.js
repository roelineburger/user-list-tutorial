import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Bookstore inc.
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/books">
              Books
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
