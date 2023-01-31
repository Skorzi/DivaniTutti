import React from 'react'
import './static/css/ownstyles.css'
import './static/css/app.css'
import HeaderBlock from './blocks/HeaderBlock'
import MainBlock from './blocks/MainBlock'

export default function App() {
    return (
        <div className='wrapper'>
            <HeaderBlock/>
            <MainBlock/>
        </div>
    )
}