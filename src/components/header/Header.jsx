import React, { useContext } from 'react';
import InputSearch from '../input/InputSearch';
import s from './Header.module.css';
import Option from '../option/Option';
import OptionCat from '../option/OptionCat';
import { BookContext } from '../context/context';
const Header = () => {
  const { setBookApi, bookApi } = useContext(BookContext);
  const categor = [
    { id: 1, cat: 'all' },
    { id: 2, cat: 'art' },
    { id: 3, cat: 'biography' },
    { id: 4, cat: 'computers' },
    { id: 5, cat: 'history' },
    { id: 6, cat: 'medical' },
    { id: 7, cat: 'poetry' },
  ];
  const act = [
    { id: 1, cat: 'relevance' },
    { id: 2, cat: 'newest' },
  ];
  const sortCateg = (t) => {
    const test = [];
    bookApi.map((book) => {
      if (book.volumeInfo.categories) {
        if (book.volumeInfo.categories[0].indexOf(' ') !== -1) {
          let i = book.volumeInfo.categories[0].indexOf(' ');
          if (i !== -1) {
            let bookCat = book.volumeInfo.categories[0]
              .substr(0, i)
              .toLowerCase();
            if (bookCat === t) {
              console.log(bookCat);
              test.push(book);
            }
          }
        } else if (book.volumeInfo.categories[0].indexOf(' ') === -1) {
          let bookCat = book.volumeInfo.categories[0].toLowerCase();
          if (bookCat === t) {
            console.log(bookCat);
            test.push(book);
          }
        }
      }
    });
    setBookApi(test);
  };

  return (
    <div className={s.head}>
      <h1 className={s.title}>Search for books</h1>
      <InputSearch />
      <div className={s.cont}>
        <Option opt={act} />
        <OptionCat opt={categor} sortCateg={sortCateg} />
      </div>
    </div>
  );
};

export default Header;
