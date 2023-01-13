import React, { useContext } from 'react';
import Found from '../components/found/Found';
import Body from '../components/body/Body';
import { useOutletContext } from 'react-router-dom';
import { BookContext } from '../components/context/context';
import Loading from '../components/loading/Loading';

const Home = () => {
    const book = useOutletContext();
    const { bookApi, loading } = useContext(BookContext)
    return (
        <>
            {bookApi.length > 0
                ?
                <>
                    {loading
                        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loading /></div>
                        : <><Found /> <Body book={book} /></>
                    }
                </>
                :
                <h2 style={{ textAlign: 'center', marginTop: 20 }}>Do a book search...</h2>
            }

        </>
    );
};

export default Home;