import React from 'react'
import BurgerMenu from './BurgerMenu'
import LinksCategory from './LinksCategory'
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
                    <LinksCategory links={list_of_links} classnameUl={'header__links'} classnameLi={'header__category'}/>
                    <div className='header__burger'><BurgerMenu categories={list_of_links}/></div>
                </div>
            </div>
        </div>
    )
}
