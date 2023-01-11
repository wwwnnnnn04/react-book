import React, {useContext, useState, useEffect} from 'react';
import s from './CardBook.module.css';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/context';
import axios from 'axios';

const CardBook = () => {
    const {bookApi, setAboutBook}=useContext(BookContext);
    console.log(bookApi)
    let idBook='';
    const fetchBook = async ()=>{
        await axios.get('https://www.googleapis.com/books/v1/volumes/'+idBook+'?key=AIzaSyBcf8QHFYJ19u09jZftbdzaiL96yb4IvnE')
        .then(res=>{setAboutBook(res.data);console.log('card',res.data)} )
    }
    
//ejonEAAAQBAJ
    

    if (!bookApi || bookApi.length === 0) return <p>No repos, sorry</p>;
    return (
        <>
            {bookApi.map(rep => {
                if (rep.volumeInfo.imageLinks.thumbnail !== undefined && rep.volumeInfo.title!== undefined) {
                    
                    return (
                        <Link to='/about' onClick={()=>{idBook=rep.id;fetchBook()}} className={s.cont} key={rep.etag}>
                            <img className={s.img} src={rep.volumeInfo.imageLinks.thumbnail} alt='load' />
                            <div className={s.card}>
                                <section className={s.categ}>{rep.volumeInfo.categories}</section>
                                <section className={s.title}>{rep.volumeInfo.title}</section>
                                <section className={s.author}>{rep.volumeInfo.authors}</section>
                            </div>
                        </Link>
                    );
                }

            })}
        </>

    );
    
};

export default CardBook;