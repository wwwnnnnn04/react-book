import React, {useContext, useState, useEffect} from 'react';
import ImgBook from '../components/imgBook/ImgBook';
import TitleBook from '../components/titleBook/TitleBook';
import s from './About.module.css'
import { BookContext } from '../components/context/context';

const About = () => {
    const {aboutBook}=useContext(BookContext);
    console.log('jj', aboutBook)
     if (aboutBook.length === 0) return <p>Loading</p>;
    return (
        <div className={s.cont}>
            <ImgBook />
            <TitleBook />
        </div>
    );
};


export default About;