import React from 'react';
import s from './Loader.module.css';
import loaderImg from '../../asses/loader.gif';
import ReactDOM from 'react-dom';

const Loader = () => {
    return ReactDOM.createPortal(
        <div className={s.wrapper}>
            <div className={s.loader}>
                <img src={loaderImg} alt="Loading..." />
            </div>
        </div>,
        document.getElementById('loader')
    );
};

export default Loader;