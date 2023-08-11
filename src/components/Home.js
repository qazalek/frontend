import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import BookCard from './BookCard';
import AddBook from './AddBook';

const URL = 'https://finalsbe.onrender.com/books/';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    const handleDelete = (deletedId) => {
      const updatedBooks = books.filter(book => book._id !== deletedId);
      setBooks(updatedBooks);
  };


    return (
        <div className="App">
            <div className="BookList">
                <h2 className="display-4 text-center">Number of Books: {books.length}</h2>
                <div className="list">
                    {books.map((book) => (
                        <BookCard key={book._id} book={book} onDelete={() => handleDelete(book._id)}/>
                    ))}
                </div>
                <div>
                    <Link to="/addBook">Add Books</Link>
                </div>
                <div>
                    <Routes>
                        <Route path="/addBook" element={<AddBook />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Home;