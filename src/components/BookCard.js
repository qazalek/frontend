import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL = 'https://finalsbe.onrender.com/books/';

const BookCard = (props) => {
  const handleDelete = () => {
    props.onDelete(props.book._id); // Pass the book ID to onDelete
};

    return (
        <div className="card-container" style={{ width: '300px', height: '400px' }}>
            <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                alt="Books"
                height="200"
            />
            <div className="desc">
                <h2>
                    <a href={`/show-book/${props.book._id}`}>{props.book.title}</a>
                </h2>
                <h3>Author: {props.book.author}</h3>
                <p>Description: {props.book.description}</p>
                <button onClick={() => handleDelete(props.book._id)}>Delete</button>
            </div>
        </div>
    );
};

export default BookCard;