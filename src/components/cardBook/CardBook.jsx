import React from 'react';
import s from './CardBook.module.css';

const CardBook = (props) => {
    return (
        <div className={s.cont}>
           <img className={s.img} src={props.cards.img} alt='load'/>
           <div className={s.card}>
                <section className={s.categ}>{props.cards.categories}</section>
                <section className={s.title}>{props.cards.title}</section>
                <section className={s.author}>{props.cards.author}</section>
           </div>
        </div>
    );
};

export default CardBook;