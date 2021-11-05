import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    /*<div>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/books">Books</Link>
    </div>*/
    <nav class="navbar navbar-light bg-light navbar-expand-lg mb-4">
      <div class="container">
        <Link className="navbar-brand" to="/">
          Bookstore inc.
        </Link>
        <div class="navbar-collapse">
          <div class="navbar-nav">
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
