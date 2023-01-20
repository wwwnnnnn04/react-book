import React from 'react';
import s from './Option.module.css';

const OptionCat = (props) => {
    return (
        <div className={s.container}>
            <h3 className={s.section}>Categories</h3>
            <select className={s.select} onChange={e => { props.sortCateg(e.target.value) }}>
                {props.opt.map(item =>
                    <option value={item.cat} key={item.id} >{item.cat}</option>
                )}
            </select>
        </div>
    );
};

export default OptionCat;