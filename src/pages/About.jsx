import React, { useContext, useState, useEffect } from 'react';
import ImgBook from '../components/imgBook/ImgBook';
import TitleBook from '../components/titleBook/TitleBook';
import s from './About.module.css'
import { BookContext } from '../components/context/context';

const About = () => {
    const { aboutBook, loading } = useContext(BookContext);
    console.log('jj', aboutBook)
    return (
        <>
            {loading
                ? <h1>load</h1>
                : <div className={s.cont}>
                    <ImgBook />
                    <TitleBook />
                </div>
            }
        </>

    );
};


export default About;