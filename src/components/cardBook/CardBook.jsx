import React from 'react';
import s from './CardBook.module.css';
import { Link } from 'react-router-dom';

const CardBook = (props) => {
    const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
        <>
        {repos.map((rep)=>{
            return(
            <Link to='/about' {...props} className={s.cont} key={rep.id}>
            {/* <img className={s.img} src={props.cards.img} alt='load'/> */}
            <div className={s.card}>
                 {/* <section className={s.categ}>{props.cards.categories}</section> */}
                 <section className={s.title}>{rep.name}</section>
                 <section className={s.author}>{rep.description}</section>
            </div>
            </Link>
            );
        })}
        </>
        
    );
};

export default CardBook;