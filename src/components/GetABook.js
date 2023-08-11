import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const URL = "https://finalsbe.onrender.com/books/";

const GetABook = () => {
    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(URL + 'getAbook/' + id)
            .then(r => {
                setBook(r.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);

    return (
        <div>
            <div>
                Book ID: {book._id}
            </div>
            <div>
                Book Title: {book.title}
            </div>
            <div>
                <Link to={`/updateBook/${book._id}`}>Update Book</Link>
            </div>
        </div>
    );
};

export default GetABook;
