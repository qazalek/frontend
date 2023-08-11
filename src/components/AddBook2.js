import { useState, useEffect } from 'react'
import axios from 'axios';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
const URL = 'http://localhost:3000/books/'

const AddBook = (e) => {
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: "",
        author: "",
        description: ""
    })
    
    
    .catch(error => {
        console.error('Error:', error);
    });

    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }
    const handleCreate = (e) => {
        e.preventDefault();
        axios.post(URL + 'add', book).then(res => {
            setBook({
                title: "",
                author: "",
                description: ""
            });navigate('/')
        })
    }
    return (
        <div class="CreateBook">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
            </div>
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Add Book</h1>
              <p class="lead text-center">Create new book</p>
              <form novalidate="">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Title of the Book"
                    name="title"
                    class="form-control"
                    value=""
                    spellcheck="false"
                    data-ms-editor="true"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    class="form-control"
                    value=""
                    spellcheck="false"
                    data-ms-editor="true"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Describe this book"
                    name="description"
                    class="form-control"
                    value=""
                    spellcheck="false"
                    data-ms-editor="true"
                  />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
        // <div>
        //     <div>
        //         <button onClick={()=>{navigate('/')}}>SHOW BOOK LIST</button>
        //     </div>
        //     <form onSubmit={handleCreate}>

        //         <table>
        //             <tr>
        //                 <td>Title</td>
        //                 <td><input name='title' onChange={onChange}></input></td>
        //             </tr>
        //             <tr>
        //                 <td>Author</td>
        //                 <td><input name='author' onChange={onChange}></input></td>
        //             </tr>
        //             <tr>
        //                 <td>Desc</td>
        //                 <td><input name='description' onChange={onChange}></input></td>
        //             </tr>
        //         </table>
        //         <input type='submit'></input>
        //     </form>
        // </div>
    )

}

export default AddBook;