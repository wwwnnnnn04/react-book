import React, { useContext } from 'react';
import s from './TitleBook.module.css';
import { BookContext } from '../context/context';

const TitleBook = () => {
    const { aboutBook } = useContext(BookContext);
    return (
        <div className={s.cont}>
            <section className={s.categ}>{aboutBook.volumeInfo.categories}</section>
            <h3 className={s.title}>{aboutBook.volumeInfo.title}</h3>
            <section className={s.author}>{aboutBook.volumeInfo.authors}</section>
            <section className={s.descr}>{aboutBook.volumeInfo.description}</section>
        </div>
    );
};

export default TitleBook;