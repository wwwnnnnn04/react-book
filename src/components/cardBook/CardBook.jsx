import React, { useContext } from 'react';
import s from './CardBook.module.css';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/context';
import axios from 'axios';

const CardBook = () => {
  const { bookApi, setAboutBook, setLoading } = useContext(BookContext);

  let idBook = '';
  const fetchBook = async () => {
    setLoading((r) => !r);
    await axios
      .get(
        process.env.REACT_APP_API +
          '/' +
          idBook +
          '?key=' +
          process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setAboutBook(res.data);
        console.log('card', res.data);
        setLoading((r) => !r);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {bookApi.map((rep) => {
        if (
          rep.volumeInfo.imageLinks.thumbnail !== undefined &&
          rep.volumeInfo.title !== undefined
        ) {
          return (
            <Link
              to='/about'
              onClick={() => {
                idBook = rep.id;
                fetchBook();
              }}
              className={s.cont}
              key={rep.etag}
            >
              <img
                className={s.img}
                src={rep.volumeInfo.imageLinks.thumbnail}
                alt='load'
              />
              <div className={s.card}>
                <section className={s.categ}>
                  {rep.volumeInfo.categories}
                </section>
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
