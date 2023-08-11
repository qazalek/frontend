import { useState, useEffect } from 'react'
import axios from 'axios';
import { Routes, Route, Link, useNavigate,useParams } from 'react-router-dom'
const URL = 'https://finalsbe.onrender.com/books/'

const AddBook = (e) => {
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: "",
        author: "",
        description: ""
    })
    const {id} = useParams();
    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }
    const handleCreate = (e) => {
        e.preventDefault();
        axios.put(URL + 'update/'+id, book).then(res => {
            setBook({
                title: "",
                author: "",
                description: ""
            });navigate('/')
        })
    }
    useEffect(()=>{
        axios.get(URL+'getAbook/'+id).then(r=>{
            setBook(r.data);console.log(id)
        })
    },{})
    return (
        <div>
            <div>
                <button onClick={()=>{navigate('/')}}>SHOW BOOK LIST</button>
            </div>
            <form onSubmit={handleCreate}>

                <table>
                    <tr>
                        <td>Title</td>
                        <td><input name='title' onChange={onChange} value={book.title}></input></td>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td><input name='author' onChange={onChange} value={book.author}></input></td>
                    </tr>
                    <tr>
                        <td>Desc</td>
                        <td><input name='description' onChange={onChange} value={book.description}></input></td>
                    </tr>
                </table>
                <input type='submit'></input>
            </form>
        </div>
    )

}

export default AddBook;