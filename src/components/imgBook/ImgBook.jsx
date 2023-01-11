import React, {useContext} from 'react';
import s from './ImgBook.module.css';
import { BookContext } from '../context/context';

const ImgBook = () => {
    const {aboutBook}=useContext(BookContext);
    return (
        <div className={s.cont}>
            <img src={aboutBook.volumeInfo.imageLinks.thumbnail} alt='load' className={s.img}/>
        </div>
    );
};

export default ImgBook;