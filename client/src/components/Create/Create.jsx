import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllTemperaments, postDogs } from '../../actions';
import style from './Create.module.css'

export default function Create() {

    function validate(input) {
        let errors = {};
        if (!input.name) {
            errors.name = "Name is required"
        };
        if (!input.min_height || !input.max_height) {
            errors.height = "Height is required"
        };
        if (!input.min_weight || !input.max_weight) {
            errors.weight = "Weight is required"
        };
        if (!input.life_span) {
            errors.life_span = "Life espan is required"
        };

        return errors;
    };

    const dispatch = useDispatch();
    const history = useHistory();
    const allTemperaments = useSelector((state) => state.temperament);

    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span: "",
        image: "",
        temperament: []
    });

    useEffect(() => {
        dispatch(getAllTemperaments());
    }, [dispatch]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    };

    function handleSelect(e) {
        const selectedTemp = e.target.value;
        if (!input.temperament.includes(selectedTemp)) {
            setInput({
                ...input,
                temperament: [...input.temperament, selectedTemp],
            });
        }
    }


    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postDogs(input));
        alert("New Dog created succesfully!");
        setInput({
            name: "",
            min_weight: "",
            max_weight: "",
            min_height: "",
            max_height: "",
            life_span: "",
            image: "",
            temperament: []
        });
        history.push('/home');
    };

    function handleDelete(e) {
            setInput({
                ...input,
                temperament: input.temperament.filter(el => el !== e.target.value)
            });
    }

    return (
        <div className={style.div}>
            <Link to='/home'>
                <button className={style.boton}> back home </button>
            </Link>
            <div className={style.container}>
                <h1 className={style.h1}> Create Your Dog </h1>
                <form className={style.form} id='form' onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label className={style.label}>Name: </label>
                        <input className={style.input} type="text" value={input.name} name="name" onChange={(e) => handleChange(e)} placeholder='Name...' />
                    </div>
                    <div>
                        {errors.name && (<p>{errors.name}</p>)}
                    </div>

                    <div>
                        <label className={style.label}>Minimum weight: </label>
                        <input className={style.input} type="number" value={input.min_weight} name="min_weight" onChange={(e) => handleChange(e)} placeholder='Min weight...' />
                    </div>

                    <div>
                        <label className={style.label}>Maximum  weight: </label>
                        <input className={style.input} type="text" value={input.max_weight} name="max_weight" onChange={(e) => handleChange(e)} placeholder='Max weight...' />
                    </div>
                    <div>
                        {errors.weight && (<p>{errors.weight}</p>)}
                    </div>

                    <div>
                        <label className={style.label}>Minimum height: </label>
                        <input className={style.input} type="text" value={input.min_height} name="min_height" onChange={(e) => handleChange(e)} placeholder='Min height...' />
                    </div>

                    <div>
                        <label className={style.label}>Maximum  height: </label>
                        <input className={style.input} type="text" value={input.max_height} name="max_height" onChange={(e) => handleChange(e)} placeholder='Max height...' />
                    </div>
                    <div>
                        {errors.height && (<p>{errors.height}</p>)}
                    </div>

                    <div>
                        <label className={style.label}>Life Span: </label>
                        <input className={style.input} type="text" value={input.life_span} name="life_span" onChange={(e) => handleChange(e)} placeholder='Life Span...' />
                    </div>
                    <div>
                        {errors.life_span && (<p>{errors.life_span}</p>)}
                    </div>

                    <div>
                        <label className={style.label}>Image: </label>
                        <input className={style.input} type="text" value={input.image} name="image" onChange={(e) => handleChange(e)} placeholder='Url...' />
                    </div>

                    <div>
                        <label className={style.label}>Temperaments: </label>
                        <select className={style.select} onChange={e => handleSelect(e)}>
                            <option disabled selected>Select a temperament</option>
                            {
                                allTemperaments.map(temp => {
                                    return (
                                        <option value={temp.name} key={temp.name + Math.random()}>
                                            {temp.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div>
                        {
                            input.temperament?.map(el => (
                                <ul className={style.ul}>
                                    <h5>{el}</h5>
                                    <button type="button" key={el} value={el} onClick={(e) => handleDelete(e)}>
                                        X
                                    </button>
                                </ul>
                            ))
                        }
                    </div>

                    <button className={style.boton} type='submit'> Create </button>
                </form>
            </div>
        </div>
    )
}
