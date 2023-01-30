import React, { useContext } from 'react';
import CardBook from '../cardBook/CardBook';
import s from './Body.module.css';
import { BookContext } from '../context/context';
import axios from 'axios';

const Body = () => {
  const { bookApi, setBookApi, more, setMore, searchB } =
    useContext(BookContext);

  const loadMore = () => {
    axios
      .get(
        process.env.REACT_APP_API +
          '/?q=' +
          searchB +
          '+inauthor&key=' +
          process.env.REACT_APP_API_KEY +
          '&maxResults=10&startIndex=' +
          more
      )
      .then((res) => setBookApi([...bookApi, ...res.data.items]))
      .catch((err) => console.log(err));
    setMore(more + 10);
  };

  return (
    <>
      <div className={s.container}>
        <CardBook />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className={s.load} onClick={loadMore}>
          Load more
        </button>
      </div>
    </>
  );
};

export default Body;
