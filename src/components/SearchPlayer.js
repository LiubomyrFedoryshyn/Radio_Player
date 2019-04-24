import React from 'react';

const SearchPlayer = ({station, streams, img}) => {
    
    return (
        <div className="searchPlayer">
             <img src={img} alt="search station"/>
             <span className="name">{station.name}</span>
             <span className="country">{station.country}</span>
             <span className="website">{station.website}</span>
             <audio src={streams} autoPlay={true} controls={true}></audio>
        </div>
    )
}

export default SearchPlayer