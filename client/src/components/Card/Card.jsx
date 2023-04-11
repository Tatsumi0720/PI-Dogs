import React from 'react'
import style from './Card.module.css'

export default function Card({ image, name, temperament, weight }) {
    return (
        <div className={style.card}>
            <div className={style.cd}>
                <h2 className={style.title}>{name}</h2>
                <div>
                    <img className={style.imge} src={image} alt="img not found" />
                </div>
                <div>
                    <h5 className={style.temperament} >{temperament}</h5>
                </div>
                <h5 className={style.weight}>{`Weight: ${weight[0]} - ${weight[1]} kg.`}</h5>
            </div>
        </div>
    )
}