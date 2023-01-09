import React, {useState, useRef} from 'react';
import InputSearch from '../input/InputSearch';
import s from './Header.module.css';
import Option from '../option/Option';
import axios from 'axios';

const Header = () => {
    const [search, setSearch] = useState('');
    const searchBook = (e)=>{
        if(e.key==='Enter'){
            axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBcf8QHFYJ19u09jZftbdzaiL96yb4IvnE')
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err));
        }
    }


    return (
        <div className={s.head}>
            <h1 className={s.title}>Search for books</h1>
            <InputSearch placeholder='js' value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook} type='text' mozactionhint='search' maxLength='30' name='input'/>
            <div className={s.cont}>
                <Option />
                <Option />
            </div>
            
        </div>
    );
};

export default Header;