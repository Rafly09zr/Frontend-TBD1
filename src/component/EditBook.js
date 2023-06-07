import React, { Fragment, useState } from "react";

const EditBook = ({ book }) => {
  const [bookData, setBookData] = useState({
    Publisher_id: book.Publisher_id,
    Author_id: book.Author_id,
    Book_name: book.Book_name,
    Publication_year: book.Publication_year,
    Book_pages: book.Book_pages
  });

  const { Publisher_id, Author_id, Book_name, Publication_year, Book_pages } = bookData;

  const onChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      const body = {
        Publisher_id,
        Author_id,
        Book_name,
        Publication_year,
        Book_pages
      };
      const response = await fetch(`http://localhost:3000/books/${book.Book_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      // Handle the response as needed
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${book.Book_id}`}
      >
        Edit
      </button>

      {/* Modal */}
      <div
        className="modal"
        id={`id${book.Book_id}`}
        onClick={() =>
          setBookData({
            Publisher_id: book.Publisher_id,
            Author_id: book.Author_id,
            Book_name: book.Book_name,
            Publication_year: book.Publication_year,
            Book_pages: book.Book_pages
          })
        }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Book</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() =>
                  setBookData({
                    Publisher_id: book.Publisher_id,
                    Author_id: book.Author_id,
                    Book_name: book.Book_name,
                    Publication_year: book.Publication_year,
                    Book_pages: book.Book_pages
                  })
                }
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              {Object.keys(bookData).map((key) => (
                <input
                  key={key}
                  type="text"
                  className="form-control"
                  name={key}
                  placeholder={key}
                  value={bookData[key]}
                  onChange={onChange}
                />
              ))}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={updateBook}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() =>
                  setBookData({
                    Publisher_id: book.Publisher_id,
                    Author_id: book.Author_id,
                    Book_name: book.Book_name,
                    Publication_year: book.Publication_year,
                    Book_pages: book.Book_pages
                  })
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBook;