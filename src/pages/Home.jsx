import React, {useContext} from 'react';
import Found from '../components/found/Found';
import Body from '../components/body/Body';
import { useOutletContext } from 'react-router-dom';
import { BookContext } from '../components/context/context';

const Home = () => {
    const book = useOutletContext();
    const {bookApi}=useContext(BookContext)
    return (
       <>
        {bookApi.length
        ?
        <>
            <Found />
            <Body book={book}/>
        </>
            :
            <h2 style={{textAlign:'center',marginTop:20}}>Do a book search...</h2>
        }
            
        </>
    );
};

export default Home;