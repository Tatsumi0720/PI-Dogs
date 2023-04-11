import React from 'react';
import style from './Paginated.module.css';

export default function paginated({ dogsPerPage, allDogs, paginated }) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i + 1);
    };
    return (
        <nav className={style.pagination}>
            <ul className={style.pageNumbers}>
                {
                    pageNumbers && pageNumbers.map(number => (
                        <li key={number}>
                            <a className={style.num} onClick={() => paginated(number)} >{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
