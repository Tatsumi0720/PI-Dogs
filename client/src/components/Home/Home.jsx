import React from 'react';
import style from './Home.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs, getAllTemperaments, filterTemperaments, filterCreated, orderBy, orderByWeight } from '../../actions/index';
import Card from '../Card/Card';
import Paginated from '../Paginated/Paginated';
import SearchBar from '../SearchBar/SearchBar';

export default function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    const allTemperaments = useSelector(state => state.temperament);

    const [order, setOrder] = useState('');
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexLastDog = currentPage * dogsPerPage;
    const indexFirstDog = indexLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexFirstDog, indexLastDog);

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
        setCurrentPage(1);
    };

    const handleFilterTemperaments = (e) => {
        e.preventDefault();
        dispatch(filterTemperaments(e.target.value));
        setCurrentPage(1);
    }

    const handleFilterCreate = (e) =>{
        e.preventDefault();
        dispatch(filterCreated(e.target.value));
        setCurrentPage(1);
    }

    const handleFilterSort = (e) => {
        e.preventDefault();
        dispatch(orderBy(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
    }

    const handleFilterWeight = (e) => {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
    }




    return (
        <div className={style.bkg}> 
            <div className={style.conta}>
                <Link className={style.link} to="/createDogs"> Create Dog </Link>
                <h1 className={style.tit}>DOGS</h1>
                <SearchBar/>
            </div>

            <button className={style.button} onClick={(e) => { handleClick(e); }}>
                Volver a cargar...
            </button>

            <div>
                <select className={style.select} onChange={e => handleFilterCreate(e)}>
                    <option className={style.options} value='all'>All dogs</option>
                    <option className={style.options} value='bds'>Created</option>
                    <option className={style.options} value='api'>Existing</option>
                </select>

                <select className={style.select} onChange={e => handleFilterTemperaments(e)}>
                    <option className={style.options} value='temp'>All temperaments</option>
                    {
                        allTemperaments?.map(temp => {
                            return (
                                <option key={temp.id} value={temp.name}>{temp.name}</option>
                            )
                        })
                    }
                </select>

                <select className={style.select} onChange={e => handleFilterSort(e)}>
                    <option value="asc">Ascendent(A-Z)</option>
                    <option value="des">Descendent(Z-A)</option>
                </select>

                <select className={style.select} onChange={e => handleFilterWeight(e)}>
                    <option value="mayormenor">Maximum weight</option>
                    <option value="menormayor">Minimum weight</option>
                </select>
            </div>
            
            <div className={style.paginado}>
                <Paginated
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginated={paginated}
                />
            </div>

            <div className={style.cards}>
                {
                    currentDogs?.map((e) => {
                        return (
                            <div key={e.id}>
                                <Link to={'/dogs/' + e.id}>
                                    <Card name={e.name}
                                        key={e.id} 
                                        image={e.image}
                                        temperament={e.temperament?.map(e => e).join(", ")}
                                        weight={e.weight}
                                        />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
