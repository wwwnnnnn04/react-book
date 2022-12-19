import React from 'react';
import InputSearch from '../input/InputSearch';
import s from './Header.module.css';
import Option from '../option/Option';

const Header = () => {
    return (
        <div className={s.head}>
            <h1 className={s.title}>Search for books</h1>
            <InputSearch placeholder='js' type='text' mozactionhint='search' maxLength='30' name='input'/>
            <div className={s.cont}>
                <Option />
                <Option />
            </div>
            
        </div>
    );
};

export default Header;