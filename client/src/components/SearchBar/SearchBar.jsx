import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllDogs, getNameDogs } from '../../actions/index';
import style from './SearchBar.module.css'


export default function SearchBar() {
    const dispatch = useDispatch();

    const [ name, setName ] = useState('');

    useEffect(() => {
        dispatch(getAllDogs());
    }, [dispatch]);

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name);
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameDogs(name));
        setName('')
    }
    return (
        <div className={style.searchBar}>
            <input className={style.inputS} type='text' value={name} placeholder='Search...' onChange={(e) => handleInputChange(e)} />
            <button className={style.buttonS} type='submit' onClick={(e) => handleSubmit(e)}> 🔍︎ </button>
        </div>
    )
}
