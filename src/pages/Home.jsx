import React, {useContext, useState} from 'react';
import Found from '../components/found/Found';
import Body from '../components/body/Body';
import { useOutletContext } from 'react-router-dom';
import { BookContext } from '../components/context/context';

const Home = () => {
    const book = useOutletContext();
    const {bookApi, loading}=useContext(BookContext)
    console.log('home',loading)
    return (
       <>
        {bookApi.length>0
        ?
        <>
        {loading
            ? <h1>load</h1>
            :<><Found /> <Body book={book}/></>
        }
        </> 
            :
            <h2 style={{textAlign:'center',marginTop:20 }}>Do a book search...</h2>
        }
            
        </>
    );
};

export default Home;