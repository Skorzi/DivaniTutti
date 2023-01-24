import React from 'react'
import BurgerMenu from './BurgerMenu'
import '../../static/css/header.css'
export default function Header() {

    const list_of_links = [
        {name: 'Каталог мебели', href: '#'},
        {name: 'Доставка и оплата', href: '#'},
        {name: 'О нас', href: '#'},
        {name: 'Связаться с нами', href: '#'},
        {name: 'Статьи о мебели', href: '#'},
    ]


    return (
        <div className='header'>
            <div className='header__block'>
                <div className='header__content'>
                    <div className='header__logo'>DIVANI_TUTTI</div>
                    <div className='header__links'>
                        {list_of_links.map(name_link => 
                            <li key={name_link.name} className='header__category'>
                                <a href={name_link.href}>{name_link.name}</a>
                            </li>
                        )}
                    </div>
                    <div className='header__burger'><BurgerMenu/></div>
                </div>
            </div>
        </div>
    )
}
