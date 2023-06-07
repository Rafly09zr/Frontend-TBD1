import React, { Fragment, useEffect, useState } from "react";
import EditBook from "./EditBook";

const ListBook = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(7);

  // Delete book function
  const deleteBook = async (id) => {
    try {
      const deleteBook = await fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE"
      });

      setBooks(books.filter((book) => book.Book_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:3000/books?_sort=Book_id&_order=asc");
      const jsonData = await response.json();
  
      setBooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  

  useEffect(() => {
    getBooks();
  }, []);

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <h2 className="text-center mt-5">Book List</h2>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Publisher ID</th>
            <th>Author ID</th>
            <th>Book Name</th>
            <th>Publication Year</th>
            <th>Book Pages</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book) => (
            <tr key={book.Book_id}>
              <td>{book.Book_id}</td>
              <td>{book.Publisher_id}</td>
              <td>{book.Author_id}</td>
              <td>{book.Book_name}</td>
              <td>{book.Publication_year}</td>
              <td>{book.Book_pages}</td>
              <td>
                <EditBook book={book} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBook(book.Book_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{width: "150px", height:"40px"}}
        >
          Previous
        </button>
        <h6 className="text-center" style={{padding: "10px"}} >Page {currentPage}</h6>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastBook >= books.length}
          style={{width: "150px", height:"40px"}}
        >
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default ListBook;
