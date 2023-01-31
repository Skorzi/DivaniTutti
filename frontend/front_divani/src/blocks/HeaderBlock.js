import React from 'react'
import BurgerMenu from '../components/burgermenu/BurgerMenu'
import Header from '../components/header/Header'

export default function MainBlock() {
  
  return (
    <div className='wrapper__header'>
        <Header/>
        <BurgerMenu/>
    </div>
  )
}
