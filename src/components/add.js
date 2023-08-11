import React, { useState } from 'react';
import axios from 'axios';

const CreateBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to add the book
    axios.post('http://localhost:3000/books/add', book)
      .then((response) => {
        console.log('Book added successfully:', response.data);
        // Clear the form after successful submission
        setBook({
          title: '',
          author: '',
          description: ''
        });
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <a className="btn btn-info float-left" href="/">
              Show Book List
            </a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={book.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={book.author}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={book.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-info btn-block mt-4"
                value="Add Book"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
