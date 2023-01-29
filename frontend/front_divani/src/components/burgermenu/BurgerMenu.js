import React from 'react'
import '../../static/css/burgermenu.css'
import LinksCategory from '../header/LinksCategory'

export default function BurgerMenu() {

    const categories = [
        { name: 'Каталог мебели', href: '#' },
        { name: 'Доставка и оплата', href: '#' },
        { name: 'О нас', href: '#' },
        { name: 'Связаться с нами', href: '#' },
        { name: 'Статьи о мебели', href: '#' },
    ]

    return (
        <div className='burger__menu'>
            <div className='burger__block_content'>
                <div className='burger__category'>
                    <LinksCategory links={categories} classnameUl={'burger__links'} classnameLi={'burger__li'} />
                </div>
                <div className='burger__search'></div>
            </div>
        </div>
    )
}
