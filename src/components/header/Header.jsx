import React, { useState } from 'react';
import InputSearch from '../input/InputSearch';
import s from './Header.module.css';
import Option from '../option/Option';
//relevance (выбран изначально), newest
const Header = (props) => {
    const [searchB, setSearchB] = useState('')
    const [opt, setOpt] = useState([
        {id:1, cat:'all'},
        {id:2, cat:'art'},
        {id:3, cat:'biography'},
        {id:4, cat:'computers'},
        {id:5, cat:'history'},
        {id:6, cat:'medical'},
        {id:7, cat:'poetry'}
    ])
    const [act, setAct] = useState([
        {id:1, cat:'relevance'},
        {id:2, cat:'newest'}
    ])

    return (
        <div className={s.head}>
            <h1 className={s.title}>Search for books</h1>
            <InputSearch
                searchB={searchB}
                setSearchB={setSearchB}
            />
            <div className={s.cont}>
                {/* <Option opt={opt}/> */}
                <Option opt={act}/>
            </div>

        </div>
    );
};

export default Header;