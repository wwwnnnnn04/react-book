import React, {useContext} from 'react';
import s from './Option.module.css';
import { BookContext } from '../context/context';

const Option = (props) => {
    const {sort, setSort} = useContext(BookContext);
    return (
        <div className={s.container}>
            <h3 className={s.section}>Categories</h3>
            <select className={s.select} value={sort} onChange={e=>setSort(e.target.value)}>
                {props.opt.map(item=>
                        <option value={item.cat} key={item.id}>{item.cat}</option>
                    )}
            </select>
        </div>
    );
};

export default Option;