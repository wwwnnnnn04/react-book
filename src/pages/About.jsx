import React, { useContext } from 'react';
import ImgBook from '../components/imgBook/ImgBook';
import TitleBook from '../components/titleBook/TitleBook';
import s from './About.module.css';
import { BookContext } from '../components/context/context';
import Loading from '../components/loading/Loading';
import styled from 'styled-components';

const Load = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const About = () => {
  const { loading } = useContext(BookContext);
  if (loading) {
    return (
      <Load>
        <Loading />
      </Load>
    );
  } else {
    return (
      <div className={s.cont}>
        <ImgBook />
        <TitleBook />
      </div>
    );
  }
};

export default About;
