import React from 'react'
import video from '../../media/videoback3.mp4'
import '../../static/css/main.css'
export default function Main() {
    return (
        <div className='main'>
            <div className='main__video_block'>
                <video muted autoPlay loop className='main__video'>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}
