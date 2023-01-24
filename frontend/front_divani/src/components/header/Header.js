import React from 'react'
import BurgerMenu from './BurgerMenu'
import '../../static/css/header.css'
export default function Header() {

    const list_of_links = [
        {name: 'Каталог мебели'},
        {name: 'Доставка и оплата'},
        {name: 'О нас'},
        {name: 'Связаться с нами'},
        {name: 'Статьи о мебели'},
    ]


    return (
        <div className='header'>
            <div className='header__block'>
                <div className='header__content'>
                    <div className='header__logo'>DIVANI_TUTTI</div>
                    <div className='header__links'>
                        {list_of_links.map(name_link => 
                            <li key={name_link.name} className='header__category'>{name_link.name}</li>
                        )}
                    </div>
                </div>
                {/* <BurgerMenu/> */}
            </div>
        </div>
    )
}
