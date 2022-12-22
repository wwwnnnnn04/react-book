import React from 'react';
import s from './ImgBook.module.css';

const ImgBook = () => {
    return (
        <div className={s.cont}>
            <img src='https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg' alt='load' className={s.img}/>
        </div>
    );
};

export default ImgBook;