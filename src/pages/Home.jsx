import React from 'react';
import Found from '../components/found/Found';
import Body from '../components/body/Body';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const book = useOutletContext();
    return (
        <>
            <Found />
            <Body book={book}/>
        </>
    );
};

export default Home;