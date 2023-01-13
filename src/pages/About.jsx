import React, { useContext } from 'react';
import ImgBook from '../components/imgBook/ImgBook';
import TitleBook from '../components/titleBook/TitleBook';
import s from './About.module.css'
import { BookContext } from '../components/context/context';
import Loading from '../components/loading/Loading';

const About = () => {
    const { loading } = useContext(BookContext);
    return (
        <>
            {loading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loading /></div>
                : <div className={s.cont}>
                    <ImgBook />
                    <TitleBook />
                </div>
            }
        </>

    );
};


export default About;