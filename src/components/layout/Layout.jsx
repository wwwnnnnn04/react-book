import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Layout = () => {
    const [book, setBook]=useState([])
    const founds = (bookData)=>{
        console.log('ohh', bookData)
        setBook(bookData)
    }
    return (
        <>
           <Header found={founds}/> 
           <Outlet context={book}/>
        </>
    );
};

export default Layout;