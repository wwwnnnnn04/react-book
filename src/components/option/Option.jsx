import React, { useContext } from 'react';
import s from './Option.module.css';
import { BookContext } from '../context/context';
import axios from 'axios';

const Option = (props) => {
  const { sort, setSort, searchB, setBookApi } = useContext(BookContext);
  const loadMore = () => {
    axios
      .get(
        process.env.REACT_APP_API +
          '/?q=' +
          searchB +
          '+inauthor&orderBy=' +
          sort +
          '&key=' +
          process.env.REACT_APP_API_KEY +
          '&maxResults=10'
      )
      .then((res) => setBookApi(res.data.items))
      .catch((err) => console.log(err));
  };
  return (
    <div className={s.container}>
      <h3 className={s.section}>Categories</h3>
      <select
        className={s.select}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        onClick={loadMore}
      >
        {props.opt.map((item) => (
          <option value={item.cat} key={item.id}>
            {item.cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Option;
