import React from 'react'
import BurgerMenu from './BurgerMenu'

export default function Header() {

    const list_of_links = [
        {name: 'Главная'},
        {name: 'Каталог мебели'},
        {name: 'Мебель для дизайн проектов'},
        {name: 'Доставка'},
        {name: 'Оплата'},
        {name: 'О нас'},
        {name: 'Связаться с нами'},
        {name: 'Статьи о мебели'},
    ]


    return (
        <div className='header'>
            <div className='header__block'>
                <div className='header__logo'></div>
                <div className='header__links'>
                    {list_of_links.map(name_link => 
                        <li key={name_link.name} className='header__category'>{name_link.name}</li>
                    )}
                </div>
                {/* <BurgerMenu/> */}
            </div>
        </div>
    )
}
