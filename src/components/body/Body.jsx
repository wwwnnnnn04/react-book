import React, { useContext } from 'react';
import CardBook from '../cardBook/CardBook';
import s from './Body.module.css';
import { BookContext } from '../context/context';
import axios from 'axios';

const Body = () => {
    const { bookApi, setBookApi, more, setMore, searchB } = useContext(BookContext);


    const loadMore = async () => {

        await axios.get('https://www.googleapis.com/books/v1/volumes/?q=' + searchB + '+inauthor&key=AIzaSyBcf8QHFYJ19u09jZftbdzaiL96yb4IvnE&maxResults=10&startIndex=' + more)
            .then(res => { setBookApi([...bookApi, ...res.data.items]); console.log('more', res.data) })
            .catch(err => console.log(err));
        setMore(more + 10)
        console.log(more)
    }

    return (
        <>
            <div className={s.container}>
                <CardBook />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}><button className={s.load} onClick={loadMore}>Load more</button></div>
        </>
    );
};

export default Body;

