import React from 'react'
import BurgerButton from '../burgermenu/BurgerButton'
import LinksCategory from './LinksCategory'
import '../../static/css/header.css'
export default function Header() {

    const list_of_links = [
        { name: 'Каталог мебели', href: '#' },
        { name: 'Доставка и оплата', href: '#' },
        { name: 'О нас', href: '#' },
        { name: 'Связаться с нами', href: '#' },
        { name: 'Статьи о мебели', href: '#' },
    ]


    return (
        <header className='header'>
            <div className='header__block'>
                <div className='header__content'>
                    <div className='header__logo'><h1>DIVANI_TUTTI</h1></div>
                    <LinksCategory links={list_of_links} classnameUl={'header__links'} classnameLi={'header__category'} />
                    <div className='header__burger'><BurgerButton /></div>
                </div>
            </div>
        </header>
    )
}
