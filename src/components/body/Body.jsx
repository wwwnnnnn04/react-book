import React, {useRef, useEffect, useContext} from 'react';
import CardBook from '../cardBook/CardBook';
import s from './Body.module.css';
import { BookContext } from '../context/context';

const Body = (props) => {
    const {bookApi, setAboutBook, more, setMore}=useContext(BookContext);
    const lastElement=useRef();
    const observer = useRef();
    console.log('ref', lastElement)
    const aboutBook = (bookItem) => {
        props.item(bookItem);
    }
    useEffect(()=>{
        let callback = function(entries, observer){
            if(entries[0].isIntersecting){
                setMore(more+10)
               console.log(more) 
            }
            
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [])
    
    return (
        <>
        <div className={s.container}>
            {<CardBook about={aboutBook} book={props.book} />}
            
        </div>
        <button ref={lastElement}>more</button>
        </>
    );
};

export default Body;


            // {/* <CardLoading isLoading={cardState.loading} repos={props.book} /> */}
            // {/* {card.map(cards=> <CardBook cards={cards} key={cards.id}/>)} */}
    // const CardLoading = Loading(CardBook);
    // const [cardState, setCardState] = useState({
    //     loading: false,
    //     repos: null
    // });

    // useEffect(() => {
    //     setCardState({ loading: true });
    //     const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    //     fetch(apiUrl)
    //         .then((res) => res.json())
    //         .then((repos) => {
    //             setCardState({ loading: false, repos: repos });
    //         });
    // }, [setCardState]);