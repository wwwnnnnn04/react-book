import React from 'react';
import s from './InputSearch.module.css';
import { AiOutlineSearch} from "@react-icons/all-files/ai/AiOutlineSearch";
import { Link } from 'react-router-dom';


const InputSearch = (props) => {
    return (
        <form className={s.container}>
            <input {...props} className={s.inp}/>
            <Link to='/'>
            <button className={s.search}><AiOutlineSearch /></button>
            </Link>
            
        </form>
     
    );
};

export default InputSearch;