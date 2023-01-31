import React from 'react'
import video from '../../media/videoback3.mp4'
import '../../static/css/main.css'
import MainButton from '../../UI/mainButtons/MainButton'


export default function Main() {
    return (
        <div className='main'>
            <div className='main__center'>
                <div className='main__center_block'>
                    <div className='main__center_descrip'>
                        <h2>Дизайнерская мебель</h2>
                    </div>
                    <div className='main__center_title'>DIVANITUTTI</div>
                    <div className='main__center_button'>
                        <MainButton>Больше</MainButton>
                    </div>
                </div>
            </div>            
            <div className='main__video_block'>
                <video muted autoPlay loop className='main__video'>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}
