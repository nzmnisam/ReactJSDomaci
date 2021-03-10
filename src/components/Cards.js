import React from 'react'
import CardItem from './CardItem'
import '../styles/Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-1.jpg" 
                        text="Explore the Distopian city of Future and fight as a Cybernetically Enhanced Mercenary"
                        label="RPG"
                        path="/Services"/>
                        <CardItem 
                        src="images/img-2.jpg" 
                        text="Shoot and climb up the Ranks in a Variety of different Game modes"
                        label="FPS"
                        path="/Services"/>                                                
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='images/img-3.jpg'
                        text='Explore different Worlds, collect Powerups and Golden Stars'
                        label='Arcade'
                        path='/Services'
                        />
                        <CardItem
                        src='images/img-4.jpg'
                        text='Shiver with the Main Protagonist of this Bone Chilling story'
                        label='Horror'
                        path='/Products'
                        />
                        <CardItem
                        src='images/img-5.jpg'
                        text='Explore the Deep Sea'
                        label='Adventure'
                        path='/Services'
                        />                                                                
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
