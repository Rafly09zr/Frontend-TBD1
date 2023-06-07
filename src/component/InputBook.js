// InputBook.js
import React, { Fragment, useState } from "react";

const InputBook = () => {
  const [bookData, setBookData] = useState({
    Book_id: "",
    Publisher_id: "",
    Author_id: "",
    Book_name: "",
    Publication_year: "",
    Book_pages: ""
  });

  const {
    Book_id,
    Publisher_id,
    Author_id,
    Book_name,
    Publication_year,
    Book_pages
  } = bookData;

  const onChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        Book_id,
        Publisher_id,
        Author_id,
        Book_name,
        Publication_year,
        Book_pages
      };
      const response = await fetch("https://backend-tbd-1.vercel.app/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(body);
      // Handle the response as needed
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h2 className="text-center mt-5">Input Book</h2>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6">
            <form onSubmit={onSubmitForm}>
              <div className="form-group">
                <label htmlFor="Book_id">Book ID</label>
                <input
                  type="text"
                  name="Book_id"
                  id="Book_id"
                  className="form-control"
                  value={Book_id}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Publisher_id">Publisher ID</label>
                <input
                  type="text"
                  name="Publisher_id"
                  id="Publisher_id"
                  className="form-control"
                  value={Publisher_id}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Author_id">Author ID</label>
                <input
                  type="text"
                  name="Author_id"
                  id="Author_id"
                  className="form-control"
                  value={Author_id}
                  onChange={onChange}
                  required
                />
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <form onSubmit={onSubmitForm}>
              <div className="form-group">
                <label htmlFor="Book_name">Book Name</label>
                <input
                  type="text"
                  name="Book_name"
                  id="Book_name"
                  className="form-control"
                  value={Book_name}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Publication_year">Publication Year</label>
                <input
                  type="text"
                  name="Publication_year"
                  id="Publication_year"
                  className="form-control"
                  value={Publication_year}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Book_pages">Book Pages</label>
                <input
                  type="text"
                  name="Book_pages"
                  id="Book_pages"
                  className="form-control"
                  value={Book_pages}
                  onChange={onChange}
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <button
              className="btn btn-success btn-lg"
              style={{ width: "400px" }}
            >
              Add new book
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
  
};

export default InputBook;
