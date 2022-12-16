import React from 'react';
import s from './Input.module.css';

const Input = (props) => {
    return (
        <form className={s.container}>
            <input {...props} className={s.inp}/>
            <button className={s.search}>Go</button>
        </form>
     
    );
};

export default Input;