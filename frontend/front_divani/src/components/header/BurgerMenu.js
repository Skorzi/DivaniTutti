import React from 'react'
import '../../static/css/burgermenu.css'
export default function BurgerMenu() {
    return (
        <div className='burger__menu'>
            <div className='burger__button'>
                <span className='burger__line_1'></span>
                <span className='burger__line_2'></span>
                <span className='burger__line_3'></span>
            </div>
            <div className='burger__menu_block'>
                <div className='burger__block_content'></div>
            </div>
        </div>
    )
}
