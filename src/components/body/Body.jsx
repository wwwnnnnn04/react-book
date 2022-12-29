import React, { useState } from 'react';
import CardBook from '../cardBook/CardBook';
import s from './Body.module.css';

const Body = () => {
    let [card, setCard] = useState([
        {id:1,img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js  приложений', author:'Дэвид Хэрон'},
        {id:2, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Node.js Разработка серверных приложений', author:'Дэвид Хэрон'},
        {id:3, img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js Разработка  приложений', author:'Дэвид Хэрон'},
        {id:4, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Разработка ожений', author:'Дэвид Хэрон'},
        {id:5,img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js  приложений', author:'Дэвид Хэрон'},
        {id:6, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Node.js Разработка серверных приложений', author:'Дэвид Хэрон'},
        {id:7, img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js Разработка  приложений', author:'Дэвид Хэрон'},
        {id:8, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Разработка серверных приложений', author:'Дэвид Хэрон'},
        {id:9,img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js  приложений', author:'Дэвид Хэрон'},
        {id:10, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Node.js Разработка серверных приложений', author:'Дэвид Хэрон'},
        {id:11, img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js Разработка  приложений', author:'Дэвид Хэрон'},
        {id:12, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Разработка ожений', author:'Дэвид Хэрон'},
        {id:13,img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js  приложений', author:'Дэвид Хэрон'},
        {id:14, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Node.js Разработка серверных приложений', author:'Дэвид Хэрон'},
        {id:15, img:'https://rust.litnet.com/uploads/covers/120/1663974979_25.jpg', categories:'comp', title:'Node.js Разработка  приложений', author:'Дэвид Хэрон'},
        {id:16, img:'https://rust.litnet.com/uploads/covers/120/1664877721_19.jpg', categories:'comp', title:'Разработка серверных приложений', author:'Дэвид Хэрон'}
   
    ])

const searchImgClick =(e)=>{
    console.log(e.target.img)
    
}

const [isLoading, setIsLoading] = useState(false);

const loadingPage = ()=>{
    setIsLoading(true)
}

    return (
        <div className={s.container}>
            {card.map(cards=> <CardBook onClick={searchImgClick} cards={cards} key={cards.id}/>)}
        </div>
    );
};

export default Body;