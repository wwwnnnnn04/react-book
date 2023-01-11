import React, {useContext, useState, useEffect} from 'react';
import ImgBook from '../components/imgBook/ImgBook';
import TitleBook from '../components/titleBook/TitleBook';
import s from './About.module.css'

const About = () => {
    return (
        <div className={s.cont}>
            <ImgBook />
            <TitleBook />
        </div>
    );
};

export default About;