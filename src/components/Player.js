import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import MdClose from 'react-ionicons/lib/MdClose'


const Player = ({stream, detail, img, addedShow, hidePlayer}) => {

    return (
        <div className={addedShow}>
             <div className="close" onClick={()=> {hidePlayer()}}><MdClose color="rgb(255, 2, 2)" /></div>
            <h3>Now Playing</h3>
            {img && <img src={img} alt="station"/>}
            <span className="name">{detail.name}</span>
            <span className="country">{detail.country}</span>
            <span className="website">{detail.website}</span>
            <ReactAudioPlayer
                src={stream}
                playIcon='<i class="far fa-play-circle"></i>'
                autoPlay
                controls
                playerWidth="10rem"
                iconSize="1.5rem"
                fontSize="1rem"
                sliderClass="invert-blue-grey"
                />
        </div>
    )
}

export default Player