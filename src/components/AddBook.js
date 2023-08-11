import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const URL = 'https://finalsbe.onrender.com/books/';

const AddBook = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [book, setBook] = useState({
        title: '',
        author: '',
        description: '',
    });

    useEffect(() => {
        if (id) {
            axios.get(URL + 'getAbook/' + id)
                .then((response) => {
                    setBook(response.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [id]);

    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        const requestURL = id ? URL + 'update/' + id : URL + 'add';

        axios.post(requestURL, book)
            .then((response) => {
                console.log('Response:', response.data);
                setBook({
                    title: '',
                    author: '',
                    description: '',
                });
                navigate('/');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <button onClick={() => navigate('/')}>SHOW BOOK LIST</button>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">Create new book</p>
                        <form noValidate="">
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Title of the Book"
                                    name="title"
                                    className="form-control"
                                    value={book.title}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Author"
                                    name="author"
                                    className="form-control"
                                    value={book.author}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Describe this book"
                                    name="description"
                                    className="form-control"
                                    value={book.description}
                                    onChange={onChange}
                                />
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" onClick={handleCreate} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;
