import React, { useContext } from 'react';
import Found from '../components/found/Found';
import Body from '../components/body/Body';
import { BookContext } from '../components/context/context';
import Loading from '../components/loading/Loading';
import styled from 'styled-components';

const Load = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const Title = styled.h2`
  text-align: center;
  margin-top: 20px;
`;

const Home = () => {
  const { bookApi, loading } = useContext(BookContext);
  if (bookApi.length > 0) {
    if (loading) {
      return (
        <Load>
          <Loading />
        </Load>
      );
    } else {
      return (
        <div>
          <Found /> <Body />
        </div>
      );
    }
  } else {
    return <Title>Do a book search...</Title>;
  }
};

export default Home;
