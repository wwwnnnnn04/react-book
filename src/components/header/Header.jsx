import React, { useState } from 'react';
import InputSearch from '../input/InputSearch';
import s from './Header.module.css';
import Option from '../option/Option';

const Header = (props) => {
    const [searchB, setSearchB] = useState('');

    const searchBook = (bookData) => {
    console.log(bookData);
    props.found(bookData);
    }

    return (
        <div className={s.head}>
            <h1 className={s.title}>Search for books</h1>
            <InputSearch
                searchB={searchB}
                setSearchB={setSearchB}
                search={searchBook}
            />
            <div className={s.cont}>
                <Option />
                <Option />
            </div>

        </div>
    );
};

export default Header;