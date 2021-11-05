import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/books">Books</Link>
    </div>
  );
}

export default NavBar;
