import React from 'react'
import {Link} from 'react-router-dom';
import Image from '../../img/Landing.jpeg'
import style from './LandingPage.module.css'

export default function LandingPage() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Bienvenidos Cachorros 🐕‍🦺🐕‍🦺🐕‍🦺</h1>
            <img className={style.image} src={Image} alt="MyImage"/>
            <Link to={'/home'}>
                <button className={style.button}> Vamos conócenos</button>
            </Link>
        </div>
    )
}
