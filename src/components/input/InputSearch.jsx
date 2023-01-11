import React, { useState, useEffect, useContext } from 'react';
import s from './InputSearch.module.css';
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BookContext } from '../context/context';

const InputSearch = (props) => {
    const {setBookApi} = useContext(BookContext);
    let tap = false;
    const clickBut = (e) => {
        tap = true;
        if ((e.key === 'Enter' || tap === true) && props.searchB !== '') {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + props.searchB + ':keyes&key=AIzaSyBcf8QHFYJ19u09jZftbdzaiL96yb4IvnE' + '&maxResults=40')
                .then(res => {
                    setBookApi(res.data.items)
                })
                .catch(err => console.log(err));
            tap = false;
        }
        props.setSearchB('')
    }

    return (
        <form className={s.container}>
            <input
                value={props.searchB}
                onChange={e => props.setSearchB(e.target.value)}
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