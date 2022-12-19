import React from 'react';
import s from './InputSearch.module.css';

import { AiOutlineSearch} from "@react-icons/all-files/ai/AiOutlineSearch";


const InputSearch = (props) => {
    return (
        <form className={s.container}>
            <input {...props} className={s.inp}/>
            <button className={s.search}><AiOutlineSearch /></button>
        </form>
     
    );
};

export default InputSearch;