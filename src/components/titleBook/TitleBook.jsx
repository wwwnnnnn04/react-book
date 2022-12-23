import React from 'react';
import s from './TitleBook.module.css';

const TitleBook = () => {
    return (
        <div className={s.cont}>
            <section className={s.categ}>Computers</section>
            <h3 className={s.title}>Node.js Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <section className={s.author}>Kendall John</section>
            <section className={s.descr}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit odit eum adipisci optio earum vel veniam in quos ex repudiandae et consectetur itaque vitae quis, asperiores, quidem quaerat cumque minus!</section>
        </div>
    );
};

export default TitleBook;