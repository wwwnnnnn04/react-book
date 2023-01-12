import React, {useContext} from 'react';
import s from './Found.module.css';
import { BookContext } from '../context/context';

const Found = () => {
    const {bookApi}=useContext(BookContext);
    if (!bookApi || bookApi.length === 0) return <h4 className={s.cont}>No books found</h4>;
    return (
        <div className={s.cont}>
            <h4 className={s.title}>
                Found {bookApi.length} results
            </h4>
        </div>
    );
};

export default Found;