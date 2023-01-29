import React from 'react'
import '../../static/css/burgerbutton.css'

export default function BurgerButton() {

    let disableclick = false

    function ButtonHandler(event){
        const animationSpeed = 500

        if (disableclick === true){
            return
        }
        event.target.classList.toggle('_active')
        document.querySelector('.burger__menu').classList.toggle('_active')
        document.body.classList.toggle('_lock')

        disableclick = true

        setTimeout(() => {
            disableclick = false
        }, animationSpeed)

    }

    return (
        <div className='burger__button' onClick={ButtonHandler}>
            <span className='burger__line_1'></span>
            <span className='burger__line_2'></span>
            <span className='burger__line_3'></span>
        </div>
    )
}
