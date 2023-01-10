import React, { useState, useEffect } from 'react';
import CardBook from '../cardBook/CardBook';
import Loading from '../loading/Loading';
import s from './Body.module.css';

const Body = (props) => {
    let [card, setCard] = useState([])
    console.log('oooo',props.book)
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


    return (
        <div className={s.container}>
            {/* <CardLoading isLoading={cardState.loading} repos={props.book} /> */}
            {/* {card.map(cards=> <CardBook cards={cards} key={cards.id}/>)} */}
            {<CardBook book={props.book}/>}
        </div>
    );
};

export default Body;