import React from 'react'
import BurgerMenu from './BurgerMenu'

export default function Header() {
    return (
        <div className='header'>
            <div className='header__block'>
                <div className='header__logo'></div>
                <div className='header__links'>
                    <li className='header__category'>Главная</li>
                    <li className='header__category'>Каталог мебели</li>
                    <li className='header__category'>Мебель для дизайн проектов</li>
                    <li className='header__category'>Доставка</li>
                    <li className='header__category'>Оплата</li>
                    <li className='header__category'>О нас</li>
                    <li className='header__category'>Связаться с нами</li>
                    <li className='header__category'>Статьи о мебели</li>
                </div>
                <BurgerMenu/>
            </div>
        </div>
    )
}
