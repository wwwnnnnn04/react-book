import React from 'react';
import s from './Option.module.css';

const Option = () => {
    return (
        <div className={s.container}>
            <h3 className={s.section}>Categories</h3>
            <select className={s.select}>
                <option >all</option>
                <option>all</option>
                <option>all</option>
            </select>
        </div>
    );
};

export default Option;