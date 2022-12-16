import React from 'react';
import Input from '../input/Input';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.head}>
            <h1 className={s.title}>Search for books</h1>
            <Input placeholder='js' type='text' mozactionhint='search' maxLength='25' name='input'/>
        </div>
    );
};

export default Header;