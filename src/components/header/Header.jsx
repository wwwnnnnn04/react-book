import React from 'react';
import InputSearch from '../input/InputSearch';
import s from './Header.module.css';
import Option from '../option/Option';

const Header = () => {

    const act = [
        { id: 1, cat: 'relevance' },
        { id: 2, cat: 'newest' }
    ]

    return (
        <div className={s.head}>
            <h1 className={s.title}>Search for books</h1>
            <InputSearch />
            <div className={s.cont}>
                <Option opt={act} />
            </div>

        </div>
    );
};

export default Header;