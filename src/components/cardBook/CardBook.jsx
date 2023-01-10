import React from 'react';
import s from './CardBook.module.css';
import { Link } from 'react-router-dom';

const CardBook = (props) => {
    console.log('ree', props.book)
    const { book } = props;
    if (!book || book.length === 0) return <p>No repos, sorry</p>;
    return (
        <>
            {book.map((rep) => {
                if (rep.volumeInfo.imageLinks.smallThumbnail !== undefined && rep.volumeInfo.title!== undefined) {
                    return (
                        <Link to='/about' {...props} className={s.cont} key={rep.id}>
                            <img className={s.img} src={rep.volumeInfo.imageLinks.thumbnail} alt='load' />
                            <div className={s.card}>
                                <section className={s.categ}>{rep.volumeInfo.categories}</section>
                                <section className={s.title}>{rep.volumeInfo.title}</section>
                                <section className={s.author}>{rep.volumeInfo.authors}</section>

                            </div>
                        </Link>
                    );
                }

            })}
        </>

    );
};

export default CardBook;