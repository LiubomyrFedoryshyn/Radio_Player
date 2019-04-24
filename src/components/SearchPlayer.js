import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SearchPlayer = ({station, streams, img}) => {
    
    return (
        <div className="searchPlayer">
             <img src={img} alt="search station"/>
             <span className="name">{station.name}</span>
             <span className="country">{station.country}</span>
             <span className="website">{station.website}</span>
             <ReactAudioPlayer
                src={streams}
                autoPlay
                controls
                />
        </div>
    )
}

export default SearchPlayer