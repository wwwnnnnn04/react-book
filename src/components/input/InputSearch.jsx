import React, { useContext } from 'react';
import s from './InputSearch.module.css';
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BookContext } from '../context/context';

const InputSearch = () => {
    const { setBookApi, sort, more, setLoading, searchB, setSearchB } = useContext(BookContext);
    let tap = false;

    const clickBut = (e) => {
        tap = true;
        if ((e.key === 'Enter' || tap === true) && searchB !== '') {
            setLoading(r => !r);
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchB + '+inauthor&orderBy=' + sort + '&key=AIzaSyBcf8QHFYJ19u09jZftbdzaiL96yb4IvnE&maxResults=10')
                .then(res => {
                    setBookApi(res.data.items)
                    console.log('sort', more)
                    setLoading(r => !r)
                })
                .catch(err => console.log(err));
            tap = false;
        }
        setSearchB('')

    }


    return (
        <form className={s.container}>
            <input
                value={searchB}
                onChange={e => setSearchB(e.target.value)}
                placeholder='search...'
                type='text'
                maxLength='30'
                name='input'
                className={s.inp}
            />
            <Link to='/'>
                <button className={s.search} onClick={(e) => clickBut(e)}><AiOutlineSearch /></button>
            </Link>
        </form>
    );
};

export default InputSearch;