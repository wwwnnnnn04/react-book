import React from 'react';
import CardBook from '../cardBook/CardBook';
import s from './Body.module.css';

const Body = (props) => {

    const aboutBook = (bookItem) => {
        props.item(bookItem);
    }

    return (
        <div className={s.container}>
            {<CardBook about={aboutBook} book={props.book} />}
        </div>
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