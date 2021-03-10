import React from 'react'
import {Link} from 'react-router-dom'

import '../styles/Cards.css'


function CardItem(properties) {
    return (
        <>
           <li className="cards__item">
                <Link className="cards__item__link" to={properties.path}>
                    <figure className="cards__item__pic-wrap" data-category={properties.label}>
                        <img src={properties.src} alt="TravelImage" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{properties.text}</h5>
                    </div>
                </Link>
            </li> 
        </>
    )
}

export default CardItem
