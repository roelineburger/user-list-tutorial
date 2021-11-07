import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const responsePromise = fetch("http://localhost:4000/books");
    responsePromise.then((response) => {
      const dataPromise = response.json();
      dataPromise.then((data) => {
        setBooks(data);
      });
    });
  }, []);

  const rows = books.map((book) => {
    return (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </td>
        <td>{book.author}</td>
        <td>{book.yearPublished}</td>
      </tr>
    );
  });

  return (
    <div>
      <NavBar />
      <div className="container">
        <h3>
          Books <button className="btn btn-primary btn-sm">Add book</button>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Publish date</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList;
