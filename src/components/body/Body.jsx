import React, { useState } from 'react';
import CardBook from '../cardBook/CardBook';
import s from './Body.module.css';

const Body = () => {
    let [card, setCard] = useState([
        {id:1,img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js  приложений', author:'Дэвид Хэрон'},
        {id:2, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Node.js Разработка серверных приложений', author:'Дэвид Хэрон'},
        {id:3, img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js Разработка  приложений', author:'Дэвид Хэрон'},
        {id:4, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Разработка ожений', author:'Дэвид Хэрон'},
        {id:1,img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js  приложений', author:'Дэвид Хэрон'},
        {id:2, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Node.js Разработка серверных приложений', author:'Дэвид Хэрон'},
        {id:3, img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js Разработка  приложений', author:'Дэвид Хэрон'},
        {id:4, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Разработка серверных приложений', author:'Дэвид Хэрон'}
   
    ])
    return (
        <div className={s.container}>
        
        {card.map(cards=> <CardBook cards={cards} key={cards.id}/>)}
        </div>
    );
};

export default Body;