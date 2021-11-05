import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function BookList() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h3>
          Books <button className="btn btn-primary btn-sm">Add book</button>
        </h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Publish date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123</td>
              <td>
                <Link to="/books/123">Daring greatly</Link>
              </td>
              <td>Brene Brown</td>
              <td>2017</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList;
