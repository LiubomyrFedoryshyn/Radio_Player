import React from 'react'
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
            <audio  controls="controls" src={stream} autoPlay={true} controls={true}></audio>
        </div>
    )
}

export default Player