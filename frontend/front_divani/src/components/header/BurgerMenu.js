import React, {useRef} from 'react'
import '../../static/css/burgermenu.css'
export default function BurgerMenu({categories}) {
    
    const BGblock = useRef()
    let disableclick = false

    function ButtonHandler(event){
        const animationSpeed = 500

        if (disableclick === true){
            return
        }

        event.target.classList.toggle('_active')
        BGblock.current.classList.toggle('_active')
        disableclick = true

        setTimeout(() => {
            disableclick = false
        }, animationSpeed)

    }

    return (
        <div className='burger__menu'>
            <div className='burger__button' onClick={ButtonHandler}>
                <span className='burger__line_1'></span>
                <span className='burger__line_2'></span>
                <span className='burger__line_3'></span>
            </div>
            <div className='burger__menu_block'>
                <div ref={BGblock} className='burger__block_content'>
                    <div className='burger__catergory'></div>
                    <div className='burger__search'></div>
                </div>
            </div>
        </div>
    )
}
