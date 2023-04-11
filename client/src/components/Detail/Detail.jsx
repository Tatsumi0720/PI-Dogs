import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from '../../actions';
import style from './Detail.module.css'

export default function Detail(props) {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail);

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    return (
        <div className={style.bkg}>
            <div className={style.container3}>
                <Link to="/home" className={style.link}>
                    <button className={style.buttonContainer}>Home</button>
                </Link>
                <div className={style.body}>
                    {detail.length ? (
                        <div>
                            <div className={style.imageContainer}>
                                <img src={detail[0].image} alt="img not found" />
                            </div>

                            <div>
                                <h1>{detail[0].name}</h1>
                                <h3>{`Height: ${detail[0].height && detail[0].height[0]} - ${detail[0].height && detail[0].height[1]
                                    } cm.`}</h3>
                                <h3>{`Weight: ${detail[0].weight && detail[0].weight[0]} - ${detail[0].weight && detail[0].weight[1]
                                    } kg.`}</h3>
                                <h3>{"Life Span: " + detail[0].life_span}</h3>
                                <div className={style.temperamentss}>
                                    <h3>Temperaments:</h3>
                                    <ul className={style.ul}>
                                        {!detail[0].createDB ? detail[0].temperament + ' ' : detail[0].temperaments?.map(el => el.name  + (' '))};
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    )
}
